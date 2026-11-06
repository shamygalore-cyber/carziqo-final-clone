import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { PaymentMethod } from '@/lib/types';
import { QrCode, Upload, Plus, Trash2, Edit2, Check, X, AlertCircle } from 'lucide-react';

export default function AdminPaymentMethods() {
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<PaymentMethod | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadMethods = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from('payment_methods').select('*').order('created_at', { ascending: true });
    setMethods((data as unknown as PaymentMethod[]) || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadMethods();
  }, [loadMethods]);

  async function handleToggleActive(method: PaymentMethod) {
    setError(null);
    const { error: updErr } = await supabase
      .from('payment_methods')
      .update({ is_active: !method.is_active })
      .eq('id', method.id);
    if (updErr) {
      setError(updErr.message);
      return;
    }
    await loadMethods();
  }

  async function handleDelete(method: PaymentMethod) {
    if (!confirm(`Delete "${method.method_name}"? This cannot be undone.`)) return;
    setError(null);
    const { error: delErr } = await supabase.from('payment_methods').delete().eq('id', method.id);
    if (delErr) {
      setError(delErr.message);
      return;
    }
    await loadMethods();
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Payment Methods</h2>
          <p className="text-gray-400 text-sm">Manage QR codes and payment options for recharge</p>
        </div>
        <button
          onClick={() => { setEditing(null); setShowForm(true); }}
          className="flex items-center gap-2 gradient-primary text-white font-semibold px-4 py-2.5 rounded-xl transition-all hover:opacity-90"
        >
          <Plus className="w-4 h-4" /> Add Method
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
        </div>
      )}

      {methods.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <QrCode className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No payment methods yet. Add one to enable recharges.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {methods.map((m) => (
            <div key={m.id} className="bg-[#131825] rounded-xl border border-[#232a3f] overflow-hidden">
              <div className="bg-white p-4 flex items-center justify-center">
                <img src={m.qr_image_url} alt={m.method_name} className="w-32 h-32 rounded-lg object-contain" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold text-sm">{m.method_name}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${m.is_active ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-500 bg-[#0a0e1a]'}`}>
                    {m.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                {m.instructions && (
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2">{m.instructions}</p>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={() => { setEditing(m); setShowForm(true); }}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-blue-500/10 text-blue-400 py-2 rounded-lg text-xs font-medium hover:bg-blue-500/20 transition-all"
                  >
                    <Edit2 className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => handleToggleActive(m)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-amber-500/10 text-amber-400 py-2 rounded-lg text-xs font-medium hover:bg-amber-500/20 transition-all"
                  >
                    {m.is_active ? <><X className="w-3.5 h-3.5" /> Disable</> : <><Check className="w-3.5 h-3.5" /> Enable</>}
                  </button>
                  <button
                    onClick={() => handleDelete(m)}
                    className="flex items-center justify-center gap-1.5 bg-red-500/10 text-red-400 px-3 py-2 rounded-lg text-xs font-medium hover:bg-red-500/20 transition-all"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <PaymentMethodForm
          method={editing}
          onClose={() => { setShowForm(false); setEditing(null); }}
          onSaved={() => { setShowForm(false); setEditing(null); loadMethods(); }}
        />
      )}
    </div>
  );
}

function PaymentMethodForm({
  method,
  onClose,
  onSaved,
}: {
  method: PaymentMethod | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(method?.method_name ?? '');
  const [qrUrl, setQrUrl] = useState(method?.qr_image_url ?? '');
  const [instructions, setInstructions] = useState(method?.instructions ?? '');
  const [isActive, setIsActive] = useState(method?.is_active ?? true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);

    const ext = file.name.split('.').pop();
    const fileName = `qr-codes/${Date.now()}.${ext}`;
    const { error: upErr } = await supabase.storage.from('payment-qr').upload(fileName, file);
    if (upErr) {
      setError(upErr.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from('payment-qr').getPublicUrl(fileName);
    setQrUrl(data.publicUrl);
    setUploading(false);
  }

  async function handleSave() {
    if (!name.trim()) {
      setError('Method name is required');
      return;
    }
    if (!qrUrl.trim()) {
      setError('A QR code image is required');
      return;
    }
    setSaving(true);
    setError(null);

    const payload = {
      method_name: name.trim(),
      qr_image_url: qrUrl,
      instructions: instructions.trim() || null,
      is_active: isActive,
    };

    if (method) {
      const { error: updErr } = await supabase.from('payment_methods').update(payload).eq('id', method.id);
      if (updErr) {
        setError(updErr.message);
        setSaving(false);
        return;
      }
    } else {
      const { error: insErr } = await supabase.from('payment_methods').insert(payload);
      if (insErr) {
        setError(insErr.message);
        setSaving(false);
        return;
      }
    }

    onSaved();
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#131825] rounded-t-2xl sm:rounded-2xl border border-[#232a3f] p-5 w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-lg font-bold text-white">{method ? 'Edit Payment Method' : 'Add Payment Method'}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm mb-4 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
          </div>
        )}

        {/* QR code preview + upload */}
        <label className="text-sm font-medium text-gray-300 mb-2 block">QR Code Image</label>
        <div className="mb-4">
          {qrUrl ? (
            <div className="relative">
              <div className="bg-white rounded-xl p-3 flex items-center justify-center">
                <img src={qrUrl} alt="QR Code" className="w-40 h-40 rounded-lg object-contain" />
              </div>
              <button
                onClick={() => setQrUrl('')}
                className="absolute top-2 right-2 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-[#232a3f] rounded-xl cursor-pointer hover:border-blue-500/40 transition-all bg-[#0a0e1a]">
              <div className="flex flex-col items-center gap-2">
                {uploading ? (
                  <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Upload className="w-6 h-6 text-gray-500" />
                )}
                <span className="text-gray-500 text-sm">{uploading ? 'Uploading...' : 'Click to upload QR code image'}</span>
              </div>
              <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            </label>
          )}
        </div>

        {/* Method name */}
        <label className="text-sm font-medium text-gray-300 mb-2 block">Method Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#0a0e1a] border border-[#232a3f] rounded-xl px-4 py-3 text-white text-sm focus:border-blue-500 outline-none mb-4"
          placeholder="e.g. GCash, USDT, Bank Transfer"
        />

        {/* Instructions */}
        <label className="text-sm font-medium text-gray-300 mb-2 block">Instructions (optional)</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={3}
          className="w-full bg-[#0a0e1a] border border-[#232a3f] rounded-xl px-4 py-3 text-white text-sm focus:border-blue-500 outline-none mb-4"
          placeholder="Payment instructions shown to users..."
        />

        {/* Active toggle */}
        <label className="flex items-center gap-3 mb-5 cursor-pointer">
          <button
            type="button"
            onClick={() => setIsActive(!isActive)}
            className={`w-11 h-6 rounded-full transition-colors ${isActive ? 'bg-blue-500' : 'bg-[#232a3f]'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${isActive ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
          <span className="text-sm text-gray-300">Active (visible to users)</span>
        </label>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-[#0a0e1a] border border-[#232a3f] text-gray-400 font-medium hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 gradient-primary text-white font-semibold py-3 rounded-xl transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {saving ? 'Saving...' : <><Check className="w-5 h-5" /> Save</>}
          </button>
        </div>
      </div>
    </div>
  );
}

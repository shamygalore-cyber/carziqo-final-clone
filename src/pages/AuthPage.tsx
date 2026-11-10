import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/I18nContext';
import { Eye, EyeOff, TrendingUp, Shield, Wallet, Gift, Info, Download, ArrowRight } from 'lucide-react';

export default function AuthPage({ onShowAbout }: { onShowAbout: () => void }) {
  const { signIn, signUp } = useAuth();
  const { t } = useI18n();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    if (mode === 'login') {
      const { error } = await signIn(email, password);
      if (error) setError(error);
    } else {
      if (password.length < 6) {
        setError(t('auth.passwordMinLength'));
        setSubmitting(false);
        return;
      }
      const { error } = await signUp(email, password, fullName, phone, referralCode || undefined);
      if (error) {
        if (error.includes('Database error') || error.includes('User already registered')) {
          setError(t('auth.emailExists'));
        } else {
          setError(error);
        }
      }
    }
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - branding */}
      <div className="lg:w-1/2 gradient-mesh-hero relative overflow-hidden flex items-center justify-center p-8 lg:p-16">
        {/* Animated decorative orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-400 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-md text-white">
          <div className="flex items-center gap-3 mb-12">
            <div className="relative">
              <img src="/carziqo.webp" alt="Carziqo.Ltd" className="w-14 h-14 rounded-2xl object-cover bg-white shadow-xl" />
              <div className="absolute inset-0 rounded-2xl ring-2 ring-white/30" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">Carziqo.Ltd</h1>
              <p className="text-blue-100/80 text-sm font-medium">{t('auth.carRentalPlatform')}</p>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5 leading-[1.1] tracking-tight">
            {t('auth.investPremium')}
            <br />
            <span className="text-gradient-accent">{t('auth.earnDaily')}</span>
          </h2>
          <p className="text-blue-100/70 text-lg mb-12 leading-relaxed font-medium">
            {t('auth.rentLuxury')}
          </p>

          <div className="space-y-4">
            <FeatureRow icon={<TrendingUp className="w-5 h-5" />} title={t('auth.upToDaily')} desc={t('auth.competitiveRates')} />
            <FeatureRow icon={<Wallet className="w-5 h-5" />} title={t('auth.flexibleWithdrawal')} desc={t('auth.cashOut')} />
            <FeatureRow icon={<Shield className="w-5 h-5" />} title={t('auth.secureTransactions')} desc={t('auth.adminVerified')} />
          </div>
        </div>
      </div>

      {/* Right side - auth form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-ink-950 gradient-mesh">
        <div className="w-full max-w-md animate-slide-up">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
              {mode === 'login' ? t('auth.welcomeBack') : t('auth.createAccount')}
            </h2>
            <p className="text-gray-500 font-medium">
              {mode === 'login'
                ? t('auth.signInToManage')
                : t('auth.startEarning')}
            </p>
          </div>

          {/* Mode toggle */}
          <div className="flex gap-1 mb-6 p-1 bg-ink-800 rounded-2xl border border-ink-600">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                mode === 'login' ? 'gradient-primary text-white shadow-lg shadow-brand-600/30' : 'text-gray-500 hover:text-white'
              }`}
            >
              {t('auth.signIn')}
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                mode === 'register' ? 'gradient-primary text-white shadow-lg shadow-brand-600/30' : 'text-gray-500 hover:text-white'
              }`}
            >
              {t('auth.register')}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <>
                <Field label={t('auth.fullName')}>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </Field>
                <Field label={t('auth.phoneNumber')}>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input-field"
                    placeholder="+1 234 567 890"
                  />
                </Field>
                <Field label={t('auth.referralCode')}>
                  <div className="relative">
                    <Gift className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                    <input
                      type="text"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                      className="input-field pl-11 uppercase"
                      placeholder={t('auth.enterReferralCode')}
                      maxLength={6}
                    />
                  </div>
                </Field>
              </>
            )}
            <Field label={t('auth.email')}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
                placeholder="you@example.com"
              />
            </Field>
            <Field label={t('auth.password')}>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </Field>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm animate-fade-in flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full gradient-primary text-white font-bold py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-brand-600/30 disabled:opacity-50 btn-shine active:scale-[0.98]"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('auth.pleaseWait')}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  {mode === 'login' ? t('auth.signIn') : t('auth.createAccountBtn')}
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            {t('auth.termsNotice')}
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <a
              href="https://www.mediafire.com/file/1vac1njb7wlktl9/Carziqo.apk/file"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 gradient-accent text-white font-bold py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-accent-500/25 btn-shine active:scale-[0.98]"
            >
              <Download className="w-5 h-5" /> {t('auth.downloadApp')}
            </a>

            <button
              onClick={onShowAbout}
              className="w-full flex items-center justify-center gap-2 text-gray-500 text-sm hover:text-brand-400 transition-colors py-2"
            >
              <Info className="w-4 h-4" /> {t('auth.aboutCarziqo')}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .input-field {
          width: 100%;
          background: #0d1320;
          border: 1px solid #1c2538;
          border-radius: 0.875rem;
          padding: 0.9375rem 1.125rem;
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          outline: none;
          transition: all 0.2s;
        }
        .input-field:focus {
          border-color: #0066ff;
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }
        .input-field::placeholder {
          color: #3a4458;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-2">{label}</label>
      {children}
    </div>
  );
}

function FeatureRow({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10 group-hover:bg-white/15 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-white text-[15px]">{title}</h3>
        <p className="text-blue-100/60 text-sm font-medium">{desc}</p>
      </div>
    </div>
  );
}

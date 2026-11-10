import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/I18nContext';
import { supabase } from '@/lib/supabase';
import { Profile, Investment, Car, RechargeLog, WithdrawalLog, formatCurrency, formatDateShort } from '@/lib/types';
import RechargeModal from '@/pages/user/RechargeModal';
import WithdrawModal from '@/pages/user/WithdrawModal';
import { Wallet, TrendingUp, ArrowUpCircle, ArrowDownCircle, Briefcase, Clock, CheckCircle, XCircle, Sparkles } from 'lucide-react';

export default function UserDashboard() {
  const { profile, session, refreshProfile } = useAuth();
  const { t } = useI18n();
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [recentRecharges, setRecentRecharges] = useState<RechargeLog[]>([]);
  const [recentWithdrawals, setRecentWithdrawals] = useState<WithdrawalLog[]>([]);
  const [showRecharge, setShowRecharge] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const loadData = useCallback(async () => {
    if (!session) return;
    const [invRes, carRes, recRes, wdRes] = await Promise.all([
      supabase.from('investments').select('*').eq('user_id', session.user.id).order('created_at', { ascending: false }),
      supabase.from('cars').select('*').eq('status', 'active').order('price', { ascending: true }).limit(5),
      supabase.from('recharge_logs').select('*').eq('user_id', session.user.id).order('created_at', { ascending: false }).limit(5),
      supabase.from('withdrawal_logs').select('*').eq('user_id', session.user.id).order('created_at', { ascending: false }).limit(5),
    ]);
    setInvestments((invRes.data as unknown as Investment[]) || []);
    setCars((carRes.data as unknown as Car[]) || []);
    setRecentRecharges((recRes.data as unknown as RechargeLog[]) || []);
    setRecentWithdrawals((wdRes.data as unknown as WithdrawalLog[]) || []);
  }, [session]);

  useEffect(() => {
    supabase.rpc('credit_daily_earnings').then(() => {
      loadData();
      refreshProfile();
    });
  }, [loadData, refreshProfile]);

  const activeInvestments = investments.filter((i) => i.status === 'active');
  const totalEarnings = investments.reduce((sum, i) => sum + Number(i.total_earned), 0);

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Balance card — premium gradient with mesh + glow */}
      <div className="relative overflow-hidden rounded-3xl gradient-mesh-hero p-6 text-white shadow-2xl shadow-brand-900/40 card-glow">
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-300/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 right-8 w-32 h-32 bg-accent-300/15 rounded-full blur-2xl translate-y-1/3" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-blue-100" />
              <p className="text-blue-100/80 text-sm font-semibold">{t('dash.availableBalance')}</p>
            </div>
            <Sparkles className="w-4 h-4 text-blue-100/30" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">{formatCurrency(profile?.wallet_balance || 0)}</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setShowRecharge(true)}
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md rounded-xl py-3.5 font-bold text-sm hover:bg-white/25 transition-all active:scale-95 border border-white/10"
            >
              <ArrowDownCircle className="w-5 h-5" />
              {t('dash.recharge')}
            </button>
            <button
              onClick={() => setShowWithdraw(true)}
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md rounded-xl py-3.5 font-bold text-sm hover:bg-white/25 transition-all active:scale-95 border border-white/10"
            >
              <ArrowUpCircle className="w-5 h-5" />
              {t('dash.withdraw')}
            </button>
          </div>
        </div>
      </div>

      {/* Withdrawal info banner */}
      <div className="bg-brand-500/8 border border-brand-500/15 rounded-2xl p-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-brand-500/15 flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-4 h-4 text-brand-400" />
        </div>
        <div>
          <p className="text-brand-400 font-bold text-sm">{t('dash.withdrawalsAvailable')}</p>
          <p className="text-gray-500 text-xs mt-0.5">{t('dash.minWithdrawal')}</p>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label={t('dash.totalEarnings')}
          value={formatCurrency(totalEarnings)}
          color="text-accent-400"
          bg="bg-accent-500/10"
        />
        <StatCard
          icon={<Briefcase className="w-5 h-5" />}
          label={t('dash.activeRentals')}
          value={String(activeInvestments.length)}
          color="text-brand-400"
          bg="bg-brand-500/10"
        />
      </div>

      {/* Active rentals overview */}
      {activeInvestments.length > 0 && (
        <section>
          <h3 className="text-sm font-bold text-gray-300 mb-3 flex items-center gap-2 tracking-wide">
            <Briefcase className="w-4 h-4" /> {t('dash.activeRentals')}
          </h3>
          <div className="space-y-3">
            {activeInvestments.slice(0, 3).map((inv) => (
              <InvestmentMiniCard key={inv.id} inv={inv} />
            ))}
          </div>
        </section>
      )}

      {/* Featured cars */}
      <section>
        <h3 className="text-sm font-bold text-gray-300 mb-3 tracking-wide">{t('dash.featuredCars')}</h3>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
          {cars.map((car) => (
            <div
              key={car.id}
              className="flex-shrink-0 w-44 rounded-2xl overflow-hidden card-elevated hover:border-brand-500/30 transition-all"
            >
              <div className="relative h-24 overflow-hidden">
                <img src={car.image_url} alt={car.car_name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800 to-transparent" />
              </div>
              <div className="p-3">
                <h4 className="text-white text-sm font-bold truncate">{car.car_name}</h4>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-accent-400" />
                  <span className="text-accent-400 text-xs font-bold">{car.daily_return_rate}%/day</span>
                </div>
                <p className="text-gray-500 text-xs mt-1 font-medium">{car.is_free ? t('dash.free') : `${t('dash.from')} ${formatCurrency(car.price)}`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent transactions */}
      <section>
        <h3 className="text-sm font-bold text-gray-300 mb-3 tracking-wide">{t('dash.recentTransactions')}</h3>
        <div className="space-y-2">
          {recentRecharges.length === 0 && recentWithdrawals.length === 0 && (
            <div className="text-center py-12 text-gray-600 text-sm card-elevated rounded-2xl">
              <Clock className="w-10 h-10 mx-auto mb-3 opacity-30" />
              {t('dash.noTransactions')}
            </div>
          )}
          {recentRecharges.map((r) => (
            <TransactionRow
              key={`r-${r.id}`}
              type="recharge"
              amount={Number(r.amount)}
              status={r.status}
              date={r.created_at}
            />
          ))}
          {recentWithdrawals.map((w) => (
            <TransactionRow
              key={`w-${w.id}`}
              type="withdrawal"
              amount={Number(w.amount)}
              status={w.status}
              date={w.created_at}
            />
          ))}
        </div>
      </section>

      {showRecharge && (
        <RechargeModal
          onClose={() => setShowRecharge(false)}
          onSuccess={() => {
            setShowRecharge(false);
            loadData();
            refreshProfile();
          }}
        />
      )}
      {showWithdraw && (
        <WithdrawModal
          balance={profile?.wallet_balance || 0}
          onClose={() => setShowWithdraw(false)}
          onSuccess={() => {
            setShowWithdraw(false);
            loadData();
            refreshProfile();
          }}
        />
      )}
    </div>
  );
}

function StatCard({ icon, label, value, color, bg }: { icon: React.ReactNode; label: string; value: string; color: string; bg: string }) {
  return (
    <div className="card-elevated rounded-2xl p-4 hover:border-ink-500 transition-all">
      <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center ${color} mb-2.5`}>
        {icon}
      </div>
      <p className="text-gray-500 text-xs font-medium">{label}</p>
      <p className="text-white font-extrabold text-lg tracking-tight">{value}</p>
    </div>
  );
}

function InvestmentMiniCard({ inv }: { inv: Investment }) {
  const progress = Math.min((inv.days_completed / inv.duration_days) * 100, 100);
  return (
    <div className="card-elevated rounded-2xl p-3.5 flex items-center gap-3 hover:border-ink-500 transition-all">
      <img src={inv.car_image_url} alt={inv.car_name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <h4 className="text-white text-sm font-bold truncate">{inv.car_name}</h4>
          <span className="text-accent-400 text-xs font-bold">{formatCurrency(Number(inv.total_earned))}</span>
        </div>
        <div className="w-full h-1.5 bg-ink-600 rounded-full overflow-hidden">
          <div className="h-full gradient-accent rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-gray-600 text-[10px] font-medium">{inv.days_completed} / {inv.duration_days} days</span>
          <span className="text-gray-600 text-[10px] font-medium">{formatCurrency(Number(inv.daily_payout))}/day</span>
        </div>
      </div>
    </div>
  );
}

function TransactionRow({ type, amount, status, date }: { type: 'recharge' | 'withdrawal'; amount: number; status: string; date: string }) {
  const { t } = useI18n();
  const isRecharge = type === 'recharge';
  return (
    <div className="card-elevated rounded-xl px-4 py-3 flex items-center justify-between hover:border-ink-500 transition-all">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          isRecharge ? 'bg-accent-500/10 text-accent-400' : 'bg-orange-500/10 text-orange-400'
        }`}>
          {isRecharge ? <ArrowDownCircle className="w-5 h-5" /> : <ArrowUpCircle className="w-5 h-5" />}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{isRecharge ? t('profile.recharge') : t('profile.withdrawal')}</p>
          <p className="text-gray-600 text-xs font-medium">{formatDateShort(date)}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-bold ${isRecharge ? 'text-accent-400' : 'text-orange-400'}`}>
          {isRecharge ? '+' : '-'}{formatCurrency(amount)}
        </p>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const { t } = useI18n();
  const config: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
    pending: { color: 'text-amber-400 bg-amber-500/10', icon: <Clock className="w-3 h-3" />, label: t('status.pending') },
    approved: { color: 'text-accent-400 bg-accent-500/10', icon: <CheckCircle className="w-3 h-3" />, label: t('status.approved') },
    rejected: { color: 'text-red-400 bg-red-500/10', icon: <XCircle className="w-3 h-3" />, label: t('status.rejected') },
    active: { color: 'text-brand-400 bg-brand-500/10', icon: <TrendingUp className="w-3 h-3" />, label: t('status.active') },
    completed: { color: 'text-accent-400 bg-accent-500/10', icon: <CheckCircle className="w-3 h-3" />, label: t('status.completed') },
    cancelled: { color: 'text-red-400 bg-red-500/10', icon: <XCircle className="w-3 h-3" />, label: t('status.cancelled') },
    paused: { color: 'text-amber-400 bg-amber-500/10', icon: <Clock className="w-3 h-3" />, label: t('status.paused') },
  };
  const c = config[status] || config.pending;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${c.color}`}>
      {c.icon}
      {c.label}
    </span>
  );
}

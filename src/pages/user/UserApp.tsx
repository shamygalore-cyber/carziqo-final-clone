import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/I18nContext';
import { Car, Home, Briefcase, User, LogOut, Gift, Leaf, Info } from 'lucide-react';
import { useState } from 'react';
import UserDashboard from '@/pages/user/UserDashboard';
import CarStore from '@/pages/user/CarStore';
import MyRentals from '@/pages/user/MyRentals';
import UserProfile from '@/pages/user/UserProfile';
import Rewards from '@/pages/user/Rewards';

type Tab = 'home' | 'store' | 'rentals' | 'rewards' | 'profile';

export default function UserApp({ onShowAbout }: { onShowAbout: () => void }) {
  const { profile, signOut } = useAuth();
  const { t } = useI18n();
  const [tab, setTab] = useState<Tab>('home');

  const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t('nav.home'), icon: <Home className="w-[18px] h-[18px]" /> },
    { id: 'store', label: t('nav.store'), icon: <Car className="w-[18px] h-[18px]" /> },
    { id: 'rentals', label: t('nav.rentals'), icon: <Briefcase className="w-[18px] h-[18px]" /> },
    { id: 'rewards', label: t('nav.rewards'), icon: <Gift className="w-[18px] h-[18px]" /> },
    { id: 'profile', label: t('nav.profile'), icon: <User className="w-[18px] h-[18px]" /> },
  ];

  return (
    <div className="min-h-screen bg-ink-950 gradient-mesh flex flex-col">
      {/* Top bar */}
      <header className="glass-strong sticky top-0 z-40 border-b border-ink-600/50">
        <div className="max-w-2xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="/carziqo.webp" alt="Carziqo.Ltd" className="w-10 h-10 rounded-xl object-cover bg-white" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
            <div>
              <h1 className="font-extrabold text-white text-sm tracking-tight">Carziqo.Ltd</h1>
              <p className="text-[11px] text-gray-500 font-medium">{t('nav.welcome')}, {profile?.full_name?.split(' ')[0] || 'User'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onShowAbout}
              className="w-9 h-9 rounded-xl bg-ink-800/80 flex items-center justify-center text-gray-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all active:scale-90"
              title="About"
            >
              <Info className="w-4 h-4" />
            </button>
            {profile && profile.carbon_points > 0 && (
              <div className="flex items-center gap-1.5 bg-accent-500/10 px-3 py-2 rounded-xl border border-accent-500/15">
                <Leaf className="w-3.5 h-3.5 text-accent-400" />
                <span className="text-accent-400 text-xs font-bold">{profile.carbon_points}</span>
              </div>
            )}
            <button
              onClick={signOut}
              className="w-9 h-9 rounded-xl bg-ink-800/80 flex items-center justify-center text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all active:scale-90"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-5 py-6 pb-28">
        {tab === 'home' && <UserDashboard />}
        {tab === 'store' && <CarStore />}
        {tab === 'rentals' && <MyRentals />}
        {tab === 'rewards' && <Rewards />}
        {tab === 'profile' && <UserProfile />}
      </main>

      {/* Bottom nav */}
      <nav className="glass-strong fixed bottom-0 left-0 right-0 border-t border-ink-600/50 z-40">
        <div className="max-w-2xl mx-auto flex items-center justify-around px-2 py-2.5">
          {navItems.map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all relative ${
                  active ? 'text-brand-400' : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {active && (
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-brand-400 rounded-full" />
                )}
                <div className={`p-1.5 rounded-xl transition-all ${active ? 'bg-brand-500/15' : ''}`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-semibold ${active ? 'text-brand-400' : ''}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

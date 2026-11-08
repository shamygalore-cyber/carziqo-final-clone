import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { LangCode, translate } from '@/lib/i18n';
import { useAuth } from '@/context/AuthContext';

type I18nContextValue = {
  lang: LangCode;
  t: (key: string, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const { profile } = useAuth();
  const [lang, setLang] = useState<LangCode>('en');

  useEffect(() => {
    if (profile?.language) {
      setLang(profile.language as LangCode);
    }
  }, [profile?.language]);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => translate(lang, key, params),
    [lang],
  );

  return <I18nContext.Provider value={{ lang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

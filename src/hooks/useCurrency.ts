import { useState, useCallback } from 'react';
import type { CurrencyMode } from '../utils/currency';

export function useCurrency(initial: CurrencyMode = 'KES') {
  const [currency, setCurrency] = useState<CurrencyMode>(() => {
    try {
      const saved = localStorage.getItem('savannah_currency_pref');
      return saved === 'USD' ? 'USD' : initial;
    } catch {
      return initial;
    }
  });

  const selectCurrency = useCallback((mode: CurrencyMode) => {
    setCurrency(mode);
    try {
      localStorage.setItem('savannah_currency_pref', mode);
    } catch {
      // ignore
    }
  }, []);

  const toggleCurrency = useCallback(() => {
    selectCurrency(currency === 'KES' ? 'USD' : 'KES');
  }, [currency, selectCurrency]);

  return {
    currency,
    setCurrency: selectCurrency,
    toggleCurrency,
    isUSD: currency === 'USD',
    isKES: currency === 'KES',
  };
}

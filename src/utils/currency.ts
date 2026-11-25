export type CurrencyMode = 'KES' | 'USD';

export const DEFAULT_USD_KES_RATE = 130;

/**
 * Formats a numeric amount with the appropriate currency symbol and localized digit grouping.
 */
export function formatCurrency(amount: number, currency: CurrencyMode): string {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return `KES ${new Intl.NumberFormat('en-KE', {
    maximumFractionDigits: 0,
  }).format(amount)}`;
}

/**
 * Returns the localized pricing string based on the active currency mode.
 */
export function resolvePricing(
  kesPricing: string,
  usdPricing: string,
  mode: CurrencyMode
): string {
  return mode === 'USD' ? usdPricing : kesPricing;
}

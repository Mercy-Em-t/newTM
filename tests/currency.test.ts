import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { formatCurrency, resolvePricing } from '../src/utils/currency';

describe('Savannah Atelier Frontend Utilities Test Suite', () => {
  test('1. formatCurrency formats KES amounts with localized grouping', () => {
    const formatted = formatCurrency(300000, 'KES');
    assert.equal(formatted, 'KES 300,000');
  });

  test('2. formatCurrency formats USD amounts with dollar currency symbol', () => {
    const formatted = formatCurrency(2300, 'USD');
    assert.equal(formatted, '$2,300');
  });

  test('3. resolvePricing selects KES string when mode is KES', () => {
    const pricing = resolvePricing('From KES 300,000 / wk', 'From $2,300 / wk', 'KES');
    assert.equal(pricing, 'From KES 300,000 / wk');
  });

  test('4. resolvePricing selects USD string when mode is USD', () => {
    const pricing = resolvePricing('From KES 300,000 / wk', 'From $2,300 / wk', 'USD');
    assert.equal(pricing, 'From $2,300 / wk');
  });
});

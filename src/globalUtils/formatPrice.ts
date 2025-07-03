export enum CurrencyLocalization {
  RUB = 'ru-RU',
  USD = 'en-US',
  EUR = 'de-DE'
}

export type CurrencyKey = keyof typeof CurrencyLocalization

// По хорошему такие данные должны синхронизироваться и находиться на бэке в отедльной таблице, например, settings
const EXCHANGE_RATES: Record<CurrencyKey, number> = {
  RUB: 1,
  USD: 78.65,
  EUR: 92.68
};

export const formatPrice = (price: number, currency: CurrencyKey) => {
  const currencyLocale = CurrencyLocalization[currency];

  // Конвертация валюты
  const convertedValue = currency === 'RUB'
    ? price / 100
    : (price / 100) / EXCHANGE_RATES[currency];

  return new Intl.NumberFormat(currencyLocale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(convertedValue)
}
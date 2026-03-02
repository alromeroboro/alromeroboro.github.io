import { en, type TranslationKey } from './en';
import { es } from './es';

export function useTranslations(locale: string | undefined) {
  return (key: TranslationKey): string =>
    locale === 'es' ? es[key] : en[key];
}

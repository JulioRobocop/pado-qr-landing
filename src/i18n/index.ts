import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";

export const SUPPORTED_LOCALES = ["pt", "en", "es"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(value: string): value is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

function detectInitialLocale(): SupportedLocale {
  const raw = navigator.language.slice(0, 2);
  return isSupportedLocale(raw) ? raw : "en";
}

const i18n = createI18n({
  legacy: false,
  locale: detectInitialLocale(),
  fallbackLocale: "en",
  messages: { en, pt, es },
});

export default i18n;

export function setLocale(locale: SupportedLocale): void {
  i18n.global.locale.value = locale;
}

import type { SupportedLocale } from "../i18n";

export interface LanguageOption {
  code: SupportedLocale;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", flag: "us" },
  { code: "pt", name: "Português", flag: "br" },
  { code: "es", name: "Español", flag: "es" },
];

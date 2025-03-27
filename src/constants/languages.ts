export enum LanguageCode {
  EN = 'en',
  DE = 'de',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  JA = 'ja',
  PT = 'pt',
}

export enum Locale {
  EN_US = 'en-US',
  DE_DE = 'de-DE',
  ES_ES = 'es-ES',
  FR_FR = 'fr-FR',
  IT_IT = 'it-IT',
  JA_JP = 'ja-JP',
  PT_BR = 'pt-BR',
}

export type LanguageOption = {
  title: string,
  url: string,
  code: LanguageCode,
  locale: Locale,
}

export const AVAILABLE_LANGUAGES: Record<LanguageCode, LanguageOption> = {
  [ LanguageCode.EN ]: {
    title: 'English',
    url: 'https://www.squarespace.com',
    code: LanguageCode.EN,
    locale: Locale.EN_US,
  },
  [ LanguageCode.DE ]: {
    title: 'Deutsch',
    url: 'https://de.squarespace.com',
    code: LanguageCode.DE,
    locale: Locale.DE_DE,
  },
  [ LanguageCode.ES ]: {
    title: 'Español',
    url: 'https://es.squarespace.com',
    code: LanguageCode.ES,
    locale: Locale.ES_ES,
  },
  [ LanguageCode.FR ]: {
    title: 'Français',
    url: 'https://fr.squarespace.com',
    code: LanguageCode.FR,
    locale: Locale.FR_FR,
  },
  [ LanguageCode.IT ]: {
    title: 'Italiano',
    url: 'https://it.squarespace.com',
    code: LanguageCode.IT,
    locale: Locale.IT_IT,
  },
  [ LanguageCode.JA ]: {
    title: '日本語',
    url: 'https://ja.squarespace.com',
    code: LanguageCode.JA,
    locale: Locale.JA_JP,
  },
  [ LanguageCode.PT ]: {
    title: 'Português',
    url: 'https://pt.squarespace.com',
    code: LanguageCode.PT,
    locale: Locale.PT_BR,
  },
}

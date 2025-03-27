import languageFlag from './language-flag'


const SUPPORTED_LANGUAGES = {
  de: {
    code: 'de',
    fullName: 'Deutsch',
    url: 'https://de.squarespace.com',
  },

  es: {
    code: 'es',
    fullName: 'Español',
    url: 'https://es.squarespace.com',
  },

  fr: {
    code: 'fr',
    fullName: 'Français',
    url: 'https://fr.squarespace.com',
  },

  it: {
    code: 'it',
    fullName: 'Italiano',
    url: 'https://it.squarespace.com',
  },

  ja: {
    code: 'ja',
    fullName: '日本語',
    url: 'https://ja.squarespace.com',
  },

  pt: {
    code: 'pt',
    fullName: 'Português',
    url: 'https://pt.squarespace.com',
  },
}

const SUPPORTED_LOCALES = {
  'de': [
    'de-DE',
  ],
  'en': [
    'en-US',
  ],
  'es': [
    'es-ES',
  ],
  'fr': [
    'fr-FR',
  ],
  'it': [
    'it-IT',
  ],
  'ja': [
    'ja-JP',
  ],
  'pt': [
    'pt-BR',
  ],
}

if ( languageFlag.uk ) {
  SUPPORTED_LANGUAGES.en = {
    code: 'en-US',
    fullName: 'English (US)',
    url: 'https://www.squarespace.com',
  }

  SUPPORTED_LANGUAGES.uk = {
    code: 'en-UK',
    fullName: 'English (UK)',
    url: 'https://uk.squarespace.com',
  }

  SUPPORTED_LOCALES.uk.push( 'en-UK' )
} else {
  SUPPORTED_LANGUAGES.en = {
    code: 'en-US',
    fullName: 'English',
    url: 'https://www.squarespace.com',
  }
}

export { SUPPORTED_LANGUAGES, SUPPORTED_LOCALES }

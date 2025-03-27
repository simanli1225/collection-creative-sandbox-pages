import BaseI18nProperty from './base-property'
import { SUPPORTED_LANGUAGES } from './supported-locales'
import { normalizeLocale } from './util'
import i18nProperties from './constants'

const SUPPORTED_LANGUAGE_CODES = Object.keys( SUPPORTED_LANGUAGES )

class Language extends BaseI18nProperty {
  constructor() {
    super( i18nProperties.LANGUAGE, SUPPORTED_LANGUAGES )
  }

  get isEnglish() {
    return this.default === 'en'
  }

  get default() {
    let language = 'en'

    if ( typeof document === 'undefined' ) {
      return language
    }

    const langAttribute = document.documentElement.getAttribute( 'lang' )

    if ( typeof langAttribute === 'string' ) {
      const code = normalizeLocale( langAttribute )
      if ( SUPPORTED_LANGUAGE_CODES.includes( code )) {
        language = code
      }
    }

    return language
  }
}

export default Language

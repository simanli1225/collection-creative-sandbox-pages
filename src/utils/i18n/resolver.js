import { SUPPORTED_LOCALES } from './supported-locales'

const resolver = {
  /**
   * getNearestLocale returns a locale that is the closest match to the locale being sent.  the closest match is based on the language, not the region
   * @param {String} originLocale
   */
  getNearestLocale( originLocale ) {
    if ( originLocale ) {
      const lang = originLocale.substring( 0, 2 )
      // check if originalLocale exists in supported locales
      if ( SUPPORTED_LOCALES[ lang ].includes( originLocale )) {
        // the locale that is being sent is supported, so return it
        return originLocale
      }

        // since the originLocale doesn't exist in the support locale list, take the first locale that has the same language and return it
      return SUPPORTED_LOCALES[ lang ][ 0 ]

    }

    return ''

  },
}

export default resolver

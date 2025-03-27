import i18nStorage from './storage'

/**
 * This class provides a base for setting i18n options.
 */
class BaseI18nProperty {
  constructor( type, options ) {
    this.type = type
    this.options = options
  }

  //to be overriden in child class
  get default() {}

  get active() {
    return this.options[ this.activeSelection ]
  }

  // set currency or language code
  set active( code ) {
    if ( this.options[ code ]) {
      this.activeSelection = code
    } else {
      //if code is deactivated, remove from storage
      this.activeSelection = this.default
      i18nStorage.removeCookie()
    }
  }

  get override() {
    return i18nStorage.get( this.type )
  }

  set override( code ) {
    i18nStorage.set( this.type, code )
  }
}

export default BaseI18nProperty

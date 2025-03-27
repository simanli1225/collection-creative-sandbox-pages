import cookieCutter from '@sqs/cookie-cutter'

const DAYS_TO_STORE = 30
const COOKIE_KEY = 'ss_i18n'
const DOMAINS = [
  'localhost',
  'squarespace.com',
  'squarespace.net',
  'sqsp.net',
]

export default {
  get( key ) {
    return this._getCookie()[ key ]
  },

  set( key, value ) {
    const cookie = this._getCookie()
    cookie[ key ] = value
    const payload = JSON.stringify( cookie )

    const expiration = new Date()
    expiration.setDate( expiration.getDate() + DAYS_TO_STORE )

    this._setCookiesOnAllDomains( payload, expiration )
  },

  removeCookie() {
    const expiration = new Date( 0 )
    const payload = JSON.stringify( this._getCookie())
    this._setCookiesOnAllDomains( payload, expiration )
  },

  _getCookie() {
    let cookie = cookieCutter.get( COOKIE_KEY )
    if ( typeof cookie === 'undefined' ) {cookie = '{}'}
    cookie = JSON.parse( cookie )
    return cookie
  },

  _setCookiesOnAllDomains( payload, expires ) {
    // "80" or "", whereas port "9000" uses insecure for development
    const secure = ( document.location.port.length <= 2 )
    const path = '/'

    DOMAINS.forEach(( domain ) => {
      cookieCutter.set( COOKIE_KEY, payload, {
        secure,
        path,
        expires,
        domain,
      })
    })
  },
}

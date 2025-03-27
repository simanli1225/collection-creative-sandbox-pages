/* eslint-disable no-use-before-define */

let cdnUrl = null

/**
 * ensureProtocol
 * @param {String} urlString string of URL protocol, with some protocol
 * @param {String} [protocol] type of protocol to ensure
 */
export function ensureProtocol( urlString, protocol = 'https' ) {
  const domainIndex = urlString.indexOf( '.' )
  const protocolIndex = urlString.indexOf( ':' )

  if ( domainIndex < protocolIndex ) {
    return protocol + '://' + urlString
  }

  return protocol + urlString.substring( protocolIndex )
}

/**
 * getJSONUrl returns the format=json version of the URL
 * @param {String} urlString the URL to format in json
 */
export function getJSONUrl( urlString ) {
  return addQueryParam( urlString, { format: 'json' })
}

/**
 * addQueryParam adds a query parameter to the provided URL
 * @param {String} urlString
 * @param {Object} key to value object for query params
 */
export function addQueryParam( urlString, queryObj ) {
  if ( !queryObj ) {
    queryObj = {}
  }

  if ( Object.keys( queryObj ).length === 0 ) {
    return urlString
  }

  const queryParams = queryParameters( urlString )

  if ( Object.keys( queryParams ).length === 0 ) {
    const queryString = Object.keys( queryObj )
      .map(( key ) => key + '=' + queryObj[ key ])
      .join( '&' )

    return urlString + '?' + queryString
  }

  for ( const attr in queryObj ) {
    if ( queryObj.hasOwnProperty( attr )) {
      queryParams[ attr ] = queryObj[ attr ]
    }
  }

  return addQueryParam(
    urlString.substring( 0, urlString.indexOf( '?' )),
    queryParams
  )
}

/**
 * getFullDomain returns the full domain (not including host) of the urlString provided
 * @param {String} urlString
 */
export function getFullDomain( urlString ) {
  const domainIndex = urlString.indexOf( '://' ) === -1 ? 0 : urlString.indexOf( '://' ) + 3
  const noProtocolString = urlString.substring( domainIndex )
  const endHostIndex = Math.min(
    noProtocolString.indexOf( ':' ) === -1 ? noProtocolString.length : noProtocolString.indexOf( ':' ),
    noProtocolString.indexOf( '/' ) === -1 ? noProtocolString.length : noProtocolString.indexOf( '/' ),
    noProtocolString.indexOf( '?' ) === -1 ? noProtocolString.length : noProtocolString.indexOf( '?' ),
    noProtocolString.indexOf( '#' ) === -1 ? noProtocolString.length : noProtocolString.indexOf( '#' ),
    noProtocolString.length
  )

  return noProtocolString.substring( 0, endHostIndex )
}

/**
 * queryParameters returns an object represented in the query parameters of the string
 * @param {String} urlString
 */
export function queryParameters( urlString = document.location.href ) {
  if ( urlString.indexOf( '?' ) === -1 ) {
    return {}
  }

  const parameterString = urlString.substring( urlString.indexOf( '?' ) + 1 )
  const parameters = parameterString.split( '&' )

  const result = {}

  parameters.forEach(( param ) => {
    const [ key, val ] = param.split( '=' )
    result[ key ] = val
  })

  return result
}


export function getCdnLarkUrl() {
  if ( !cdnUrl ) {
    const lark = document.getElementById( 'cdn-lark' )
    cdnUrl = ( lark && lark.dataset.src.split( '/assets/' )[ 0 ]) || ''
  }

  return cdnUrl
}

/**
 * normalizePath removes any trailing slashes in URL passed
 * @param {String} urlString
 */
export function normalizePath( urlString ) {
  // remove trailing slash if it has one
  if ( urlString.lastIndexOf( '/' ) === urlString.length - 1 ) {
    return urlString.substring( 0, urlString.length - 1 )
  }

  return urlString
}


/**
 * hasQueryParam returns true if the passed url contains the passed parameter
 * @param {String} paramName, the name of the parameter to check
 * @param {String} urlString [Optional], defaults to the document's current URL
 */
export function hasQueryParam( paramName, urlString = document.location.href ) {
  const params = queryParameters( urlString )
  if ( params[ paramName ] === 'false' ) {return false}
  return ( !!params[ paramName ])
}

/**
 * getUrlForCurrentHost Replaces a url's host with the current host.
 * If you're on localhost, it returns the original url
 * @param {String} Full url, ie https://account.squarespace.com/settings/profile
 * @return {String} New url, ie https://account.qa1.sqsp.net/settings/profile
 */
export function getUrlForCurrentHost( urlString ) {
  if ( window.location.hostname.includes( 'localhost' )) {return urlString}
  if ( window.location.hostname === 'www.squarespace.com' ) {return urlString}
  const newUrl = new URL( urlString )
  const newSubDomain = newUrl.hostname.split( '.' )[ 0 ]

  const thisUrl = new URL( window.location.href )
  const domainParts = thisUrl.hostname.split( '.' )

  domainParts[ 0 ] = newSubDomain

  newUrl.hostname = domainParts.join( '.' )

  return newUrl
}

/**
 * getAuthRedirectUrl Creates a url at '/auth/protected-redirect/?location={encoded-url}' for logging in and redirecting
 * @param {String} path, 'create-account' or 'login'
 * @param {String} redirect url to be encoded
 * @return {String} Redirect path, ie /auth/protected-redirect/?location=https%3A%2F%2Fwww.squarespace.com%2Ftemplates
 */
export function getAuthRedirectUrl( path = 'create-account', redirect = 'https://www.squarespace.com/templates' ) {
  let redirectPath = `/auth/protected-redirect/${ path }`
  const redirectUrl = getUrlForCurrentHost( redirect )
  redirectPath = `${ redirectPath }?location=${ encodeURIComponent( redirectUrl ) }`
  return redirectPath
}

/**
 * getEventDestinationUrl Removes the hostname if it's a Squarespace domain
 * @param {String} urlString url, ie https://account.squarespace.com/settings/profile
 * @return {String} transformed url, ie '/settings/profile'
 */
export function getEventDestinationUrl( urlString ) {
  const url = new URL( urlString )
  if ( url.hostname.indexOf( window.location.hostname ) > -1 ) {
    return url.pathname
  }

  return urlString

}

export default {
  ensureProtocol,
  getJSONUrl,
  addQueryParam,
  getFullDomain,
  queryParameters,
  getCdnLarkUrl,
  normalizePath,
  hasQueryParam,
  getUrlForCurrentHost,
  getAuthRedirectUrl,
  getEventDestinationUrl,
}

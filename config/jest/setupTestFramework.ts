import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})


function noop() {
  // sl_tr_start and sl_tr_end are used for frontsite translations
  // they are noop Smartling directives used to identify strings that need to be translated
  // https://github.com/sqsp/sl-translation-markers
}

// @ts-expect-error
window.sl_tr_end = noop
// @ts-expect-error
window.sl_tr_start = noop


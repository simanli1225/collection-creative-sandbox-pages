import { Context } from '@sqs/config-context'

/**
 * Use this file for make declaration that will be available in the global scope.
 * Do not add any top-level export declarations, as that will trick tsc to parse this as a module and affect the scope.
 */



declare global {
  interface Window {
    Static?: {
      SQUARESPACE_CONTEXT?: Context;
    };
    __collectionName: string;
    _sqspEventsLogging: boolean;
    __templateVersion: string;
  }

  declare module '*.less' {
    const content: {[className: string]: string}
    export = content
  }

  declare const __BRANCH_NAME__: string
  declare const __BUILD_NUMBER__: string
  declare const __DEV__: string
  declare const __TEST__: string
  declare const sl_tr_start: () => void
  declare const sl_tr_end: () => void
}

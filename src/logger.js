import _debug from "debug";

const hasDocument = typeof document === "object" && document !== null;
const hasWindow =
  typeof window === "object" && window !== null && window.self === window;

const isBrowser = () => hasDocument && hasWindow;

if (isBrowser) {
  // Heads Up!
  // https://github.com/visionmedia/debug/pull/331
  //
  // debug now clears storage on load, grab the debug settings before require('debug').
  // We try/catch here as Safari throws on localStorage access in private mode or with cookies disabled.
  let DEBUG;
  try {
    if (typeof window !== "undefined") {
      /* eslint-disable no-undef */
      DEBUG = window.localStorage.debug;
      /* eslint-enable no-undef */
    }
  } catch (e) {
    /* eslint-disable no-console */
    console.error("groupher could not enable debug.");
    /* console.error(e) */
    /* eslint-enable no-console */
  }

  // enable what ever settings we got from storage
  _debug.enable(DEBUG);
}

/**
 * Create a namespaced debug function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'src/lib'
 * const log = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
const buildLog = (namespace, prefix = "@editor/") =>
  _debug(`${prefix}${namespace}`);

export default buildLog;

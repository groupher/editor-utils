import {
  handleMDShortcut,
  handleInlineMDShortcut,
  handleMention,
} from "./triggerHub";

export { debounce } from "debounce";
export { loadJS, make, isEmptyObj, findIndex } from "./utils";

export {
  highlightSettingIcon,
  moveCaretToEnd,
  selectNode,
  insertHtmlAtCaret,
} from "./dom";

export const TriggerHub = {
  handleMDShortcut,
  handleInlineMDShortcut,
  handleMention,
};

/**
 * enhance the block with options
 * @param el {HTMLElement}
 * @param api editor.js's api
 * @param option enhance options
 *
 * @returns void
 */
export const enhanceBlock = (el, api, option = {}) => {
  const opt = Object.assign(
    { markdown: true, inlineMarkdown: true, mention: true, emoji: true },
    option
  );

  api.listeners.on(
    el,
    "input",
    (ev) => {
      if (opt.markdown) {
        handleMDShortcut(ev, api);
      }
      if (opt.inlineMarkdown) {
        handleInlineMDShortcut(ev, api);
      }
      if (opt.mention) {
        handleMention(ev);
      }
    },
    true
  );
};

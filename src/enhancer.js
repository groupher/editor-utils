import debounce from "debounce";

import {
  handleMDShortcut,
  handleInlineMDShortcut,
  handleMention,
} from "./triggerHub";

const handler = (ev, api, opt) => {
  if (opt.markdown) {
    handleMDShortcut(ev, api);
  }
  if (opt.inlineMarkdown) {
    handleInlineMDShortcut(ev, api);
  }
  if (opt.mention) {
    handleMention(ev);
  }
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
    { markdown: false, inlineMarkdown: true, mention: true, emoji: true },
    option
  );

  api.listeners.on(
    el,
    "input",
    (ev) => debounce(handler(ev, api, opt), 100),
    true
  );
};

export const holder = 1;

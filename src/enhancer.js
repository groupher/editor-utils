import debounce from "debounce";
import buildLog from "./logger";

import {
  handleMDShortcut,
  handleInlineMDShortcut,
  handleMention,
} from "./triggerHub";

import { CSS } from "./triggerHub/metrics";

const log = buildLog("utils:enhancer");

const inputHandler = (ev, api, opt) => {
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
 * remove the special element(mention, emoji etc..) by one step
 * 一次性移除 mention emoji 等特别的元素
 *
 * @returns void
 */
const keyupHandler = (e) => {
  if (e.code !== "Backspace" && e.code !== "Delete") {
    return;
  }

  if (window.getSelection) {
    let sel = window.getSelection();

    if (sel.anchorNode.parentNode.className === CSS.mention) {
      sel.anchorNode.parentNode.remove();
    }
  } else {
    log("window Selection is not supported.");
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
    (ev) => debounce(inputHandler((ev, api, opt)), 100),
    (ev) => debounceInputHandler(ev, api, opt),
    false
  );

  api.listeners.on(el, "keyup", (ev) => keyupHandler(ev));
};

export const freeEnhanceBlock = (el, api) => {
  api.listeners.off(el, "input", (ev) => inputHandler(el, api));
  api.listeners.off(el, "keyup", (ev) => keyupHandler(ev), false);
};

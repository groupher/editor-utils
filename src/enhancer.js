import debounce from "debounce";
import buildLog from "./logger";

import {
  handleMDShortcut,
  handleInlineMDShortcut,
  handleMention,
  handleEmoji,
  handleLinkCard,
} from "./triggerHub";

import { CSS } from "./triggerHub/metrics";

const log = buildLog("utils:enhancer");

const inputHandler = (ev, api, opt) => {
  log("inputHandler: ", ev);

  if (opt.markdown) {
    handleMDShortcut(ev, api);
  } else if (opt.inlineMarkdown) {
    handleInlineMDShortcut(ev, api);
  } else if (opt.mention) {
    handleMention(ev);
  } else if (opt.emoji) {
    handleEmoji(ev);
  } else if (opt.linkCard) {
    handleLinkCard(ev);
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
 * @param option enhance options, default: { markdown: false, inlineMarkdown: true, mention: true, emoji: true, linkCard: false }
 *
 * @returns void
 */
export const enhanceBlock = (el, api, option = {}) => {
  const opt = Object.assign(
    {
      markdown: false,
      inlineMarkdown: true,
      mention: true,
      emoji: true,
      linkCard: false,
    },
    option
  );

  api.listeners.on(
    el,
    "input",
    (ev) => debounce(inputHandler(ev, api, opt), 100),
    false
  );

  // api.listeners.on(el, "keyup", (ev) => keyupHandler(ev), false);
};

export const freeEnhanceBlock = (el, api) => {
  api.listeners.off(el, "input", (ev) => inputHandler(el, api), false);
  api.listeners.off(el, "keyup", (ev) => keyupHandler(ev), false);
};

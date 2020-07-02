export const CSS = {
  focusHolder: "focus-holder",
  mention: "cdx-mention",
  emoji: "cdx-emoji",
};

// 使用 inline block tag 的组件内部的 sanitizer 是互斥的，必须使用不同的
// html 行内元素
export const INLINE_BLOCK_TAG = {
  mention: "label",
  strike: "strike",
  lock: "addr",
  emoji: "i",
};

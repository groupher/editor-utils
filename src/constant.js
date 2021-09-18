export const CSS = {
  focusHolder: "focus-holder",
  mention: "cdx-mention",
  emoji: "cdx-emoji",
  editorInlineToolbarWrapper: "ce-inline-toolbar__toggler-and-button-wrapper",
  mentionContainer: "cdx-mention__container",
  emojiContainer: "cdx-emoji__container",
  ctrlBreakHint: "cdx-ctrlbreak-hint",
  ctrlBreakEntity: "cdx-ctrlbreak-entity",
};

// 使用 inline block tag 的组件内部的 sanitizer 是互斥的，必须使用不同的
// html 行内元素
export const INLINE_BLOCK_TAG = {
  mention: "label",
  strike: "strike",
  lock: "addr",
  emoji: "i",
};

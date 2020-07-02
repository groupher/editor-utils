import { insertHtmlAtCaret, selectNode } from "../dom";
import { CSS, TRIGGER } from "./metrics";
import { INLINE_BLOCK_TAG } from "../constant";

/**
 * handle emoji (@)
 * @param ev {HTMLElementEvent}
 * @return {HTMLElementEvent}
 * @private
 */
const handleEmoji = (ev) => {
  if (ev.data === TRIGGER.emoji) {
    const emoji = `<${INLINE_BLOCK_TAG.emoji} class="${CSS.emoji}" contenteditable="false" id="${CSS.emoji}" tabindex="1">&nbsp;</${INLINE_BLOCK_TAG.emoji}>`;
    const emojiId = `#${CSS.emoji}`;

    insertHtmlAtCaret(emoji);

    const emojiParent = document.querySelector(emojiId).parentElement;
    emojiParent.innerHTML = emojiParent.innerHTML.replace(
      TRIGGER.emoji + emoji,
      emoji
    );
    selectNode(document.querySelector(emojiId));
  }
};

export default handleEmoji;

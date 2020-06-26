import { insertHtmlAtCaret, selectNode } from "../dom";
import { ANCHOR, CSS, TRIGGER } from "./metrics";

/**
 * handle mention (@)
 * @param ev {HTMLElementEvent}
 * @return {HTMLElementEvent}
 * @private
 */
const handleMention = (ev) => {
  if (ev.data === TRIGGER.mention) {
    const mention = `<span class="${CSS.mention}" contenteditable="false" id="${CSS.mention}" tabindex="1">&nbsp;</span>`;
    const mentionId = `#${CSS.mention}`;

    insertHtmlAtCaret(mention);

    insertHtmlAtCaret(ANCHOR.SPACE);
    insertHtmlAtCaret(ANCHOR.SPACE);

    const mentionParent = document.querySelector(mentionId).parentElement;
    mentionParent.innerHTML = mentionParent.innerHTML.replace(
      TRIGGER.mention + mention,
      mention
    );
    selectNode(document.querySelector(mentionId));
  }
};

export default handleMention;

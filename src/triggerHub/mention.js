import { insertHtmlAtCaret, selectNode } from "../dom";

/**
 * handle mention (@)
 * @param ev {HTMLElementEvent}
 * @return {HTMLElementEvent}
 * @private
 */
const handleMention = (ev) => {
  if (ev.data === "@") {
    const mentionClass = "cdx-mention";
    const mention = `<span class="${mentionClass}" contenteditable="false" id="${mentionClass}" tabindex="1" style="opacity: 1;">&nbsp;</span>`;
    const mentionId = `#${mentionClass}`;

    insertHtmlAtCaret(mention);

    insertHtmlAtCaret(ANCHOR.SPACE);
    insertHtmlAtCaret(ANCHOR.SPACE);

    const mentionParent = document.querySelector(mentionId).parentElement;
    console.log("mentionParent ", mentionParent.innerHTML);
    mentionParent.innerHTML = mentionParent.innerHTML.replace(
      "@" + mention,
      mention
    );
    selectNode(document.querySelector(mentionId));
  }
};

export default handleMention;

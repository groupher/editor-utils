import buildLog from "../logger";
import { insertHtmlAtCaret, selectNode } from "../dom";
import { CSS, TRIGGER } from "./metrics";
import { INLINE_BLOCK_TAG } from "../constant";

const log = buildLog("utils/emoji");

/**
 * handle mention (@)
 * @param ev {HTMLElementEvent}
 * @return {HTMLElementEvent}
 * @private
 */
const handleMention = (ev) => {
  if (ev.data !== TRIGGER.mention) return;

  const mention = `<${INLINE_BLOCK_TAG.mention} data-sign="@" class="${CSS.mention}" contenteditable="false" id="${CSS.mention}" tabindex="1">&nbsp;</${INLINE_BLOCK_TAG.mention}>`;
  const mentionId = `#${CSS.mention}`;

  insertHtmlAtCaret(mention);

  const mentionParent = document.querySelector(mentionId).parentElement;
  log("mentionParent: ", mentionParent);
  mentionParent.innerHTML = mentionParent.innerHTML.replace(
    TRIGGER.mention + mention,
    mention
  );

  log("selectNode mentionId: ", mentionId);
  selectNode(document.querySelector(mentionId));
};

export default handleMention;

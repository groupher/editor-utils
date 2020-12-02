import { insertHtmlAtCaret, selectNode } from "../dom";
import buildLog from "../logger";

import { ANCHOR, CSS } from "./metrics";

const log = buildLog("utils:markdown");
/**
 * supported markdown syntax constants
 * NOTE:  inline markdown syntax is not included, like bold/italic/inline-code etc..
 */
const MD_TYPE = {
  HEADER_1: "HEADER_1",
  HEADER_2: "HEADER_2",
  HEADER_3: "HEADER_3",
  UNORDERED_LIST: "UNORDERED_LIST",
  ORDERED_LIST: "ORDERED_LIST",
  QUOTE: "QUOTE",
  CODE: "CODE",
};

/**
 * Base RegExp to detect inline markdown syntax
 * see https://www.markdownguide.org/basic-syntax/
 */
const MD_REG = {
  // BOLD_old: new RegExp(/\*\*(.*?)\*\*/),
  BOLD: new RegExp(/\*\*([\S]{1,})\*\*/),
  ITALIC: new RegExp(/__([\S]{1,})__/),
  // NOTE:  marker is extended
  MARKER: new RegExp(/==([\S]{1,})==/),
  INLINE_CODE: new RegExp(/\`([\S]{1,})\`/),
};

// parse the match info given by string.match(regex)
const parseMatchTexts = function (texts) {
  return {
    md: texts[0],
    content: texts[1],
    isValid: true, // texts[1].length > 0
  };
};

const markdownBlockConfig = (type) => {
  switch (type) {
    case MD_TYPE.HEADER_1:
      return {
        type: "header",
        toolData: { level: 1 },
        config: {},
      };
    case MD_TYPE.HEADER_2:
      return {
        type: "header",
        toolData: { level: 2 },
        config: {},
      };
    case MD_TYPE.HEADER_3:
      return {
        type: "header",
        toolData: { level: 3 },
        config: {},
      };

    case MD_TYPE.UNORDERED_LIST:
      return {
        type: "list",
        toolData: { style: "unordered" },
        config: {},
      };

    case MD_TYPE.ORDERED_LIST:
      return {
        type: "list",
        toolData: { style: "ordered" },
        config: {},
      };

    case MD_TYPE.QUOTE:
      return {
        type: "quote",
        toolData: {},
        config: {},
      };

    case MD_TYPE.CODE:
      return {
        type: "code",
        toolData: {},
        config: {},
      };

    default: {
      return { isInvalid: false, type: "", toolData: "", config: "" };
    }
  }
};

/**
 * check main markdown syntax like header, code, list, quote etc
 * supported syntax are list in MD_TYPE
 *
 * @param curBlock {object} editor.js's edit block
 * @param data {string} current input data, data === ' ' means input something followed by a space
 *        which is used to trigger the markdown block
 */
const checkMarkdownSyntax = (curBlock, data) => {
  const blockText = curBlock.holder.textContent.trim();
  log("blockText: ", blockText);

  let isValidMDStatus = true;
  let MDType = "";
  const isFollowedBySpace = data === " " ? true : false;

  // if input length is larger then longest markdown sytax(###### ), is no need to check
  if (blockText.length > 7) return { isValidMDStatus: false, MDType };

  switch (true) {
    case blockText === "#" && isFollowedBySpace: {
      MDType = MD_TYPE.HEADER_1;
      break;
    }
    case blockText === "##" && isFollowedBySpace: {
      MDType = MD_TYPE.HEADER_2;
      break;
    }

    case (blockText === "###" ||
      blockText === "####" ||
      blockText === "#####" ||
      blockText === "######") &&
      isFollowedBySpace: {
      MDType = MD_TYPE.HEADER_3;
      break;
    }

    case blockText === "-" && isFollowedBySpace: {
      MDType = MD_TYPE.UNORDERED_LIST;
      break;
    }

    case blockText === "1" && isFollowedBySpace: {
      MDType = MD_TYPE.ORDERED_LIST;
      break;
    }

    case blockText === ">" && isFollowedBySpace: {
      MDType = MD_TYPE.QUOTE;
      break;
    }

    case blockText === "```": {
      MDType = MD_TYPE.CODE;
      break;
    }

    default: {
      isValidMDStatus = false;
    }
  }

  return { isValidMDStatus, MDType };
};

// inline markdown syntax
const checkInlineMarkdownSyntax = (curBlock, data) => {
  const blockText = curBlock.holder.textContent.trim();
  const { BOLD, ITALIC, MARKER, INLINE_CODE } = MD_REG;

  const boldTexts = blockText.match(BOLD);
  if (boldTexts) {
    const { isValid, md, content } = parseMatchTexts(boldTexts);
    return { isValid, md, html: `<b>${content}</b>` };
  }

  const markerTexts = blockText.match(MARKER);
  if (markerTexts) {
    const { isValid, md, content } = parseMatchTexts(markerTexts);
    return { isValid, md, html: `<mark class=${CSS.marker}>${content}</mark>` };
  }

  const italicTexts = blockText.match(ITALIC);
  if (italicTexts) {
    const { isValid, md, content } = parseMatchTexts(italicTexts);
    return { isValid, md, html: `<i>${content}</i>` };
  }

  const inlineCodeTexts = blockText.match(INLINE_CODE);
  if (inlineCodeTexts) {
    const { isValid, md, content } = parseMatchTexts(inlineCodeTexts);
    return {
      isValid,
      md,
      html: `<code class=${CSS.inlineCode}>${content}</code>`,
    };
  }

  return { isValid: false, text: "" };
};

// shortcut

// handle markdown shortcuts
/**
 * handle markdown shortcuts
 * currently support header, list, code, etc...
 * @param ev {HTMLElementEvent}
 * @param api {Editor.js's api object}
 * @return {void}
 * @private
 */
export const handleMDShortcut = (ev, api) => {
  const curBlockIndex = api.blocks.getCurrentBlockIndex();
  const curBlock = api.blocks.getBlockByIndex(curBlockIndex);

  console.log("handleMDShortcut curBlock: ", curBlock);

  if (curBlockIndex < 0 || !curBlock) return false;

  const { isValidMDStatus, MDType } = checkMarkdownSyntax(curBlock, ev.data);

  console.log("handleMDShortcut isValidMDStatus: ", isValidMDStatus);
  if (!isValidMDStatus) return false;

  // delete current block
  const { isInvalid, type, toolData, config } = markdownBlockConfig(MDType);
  console.log("MDType: ", MDType);
  console.log("markdownBlockConfig isInvalid: ", markdownBlockConfig(MDType));

  if (!isInvalid) {
    api.blocks.delete(curBlockIndex);
    api.blocks.insert(type, toolData, config, curBlockIndex);
    // set cursor to first char
    api.caret.setToBlock(curBlockIndex, "start");
  }
};

/**
 * handle inline markdown syntax like bold, italic, inline-code etc..
 * @return {HTMLDivElement}
 * @param api {Editor.js's api object}
 * @private
 */
export const handleInlineMDShortcut = (ev, api) => {
  const curBlockIndex = api.blocks.getCurrentBlockIndex();
  const curBlock = api.blocks.getBlockByIndex(curBlockIndex);

  if (curBlockIndex < 0 || !curBlock) return false;

  const { isValid, md, html } = checkInlineMarkdownSyntax(curBlock, ev.data);
  if (isValid) {
    const INLINE_MD_HOLDER = `<span id="${ANCHOR.INLINE_MD}" />`;

    // 改变 innerHTML 以后光标会到内容的最开始，需要埋一个点，完事后在选中
    insertHtmlAtCaret(INLINE_MD_HOLDER);
    ev.target.innerHTML = ev.target.innerHTML.replace(md, html);
    selectNode(document.querySelector(`#${ANCHOR.INLINE_MD}`));
    document.querySelector(`#${ANCHOR.INLINE_MD}`).remove();

    // 防止插入粗体以后以后输入一直是粗体。。
    insertHtmlAtCaret(ANCHOR.SPACE);
  }
};

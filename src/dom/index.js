import buildLog from "../logger";
import { CSS } from "../constant";

export { default as clazz } from "./clazz";

const log = buildLog("utils/dom");

// check if given param is HTML Element
export const isDOM = (el) => el instanceof Element;

/**
 * Helper for making Elements with attributes
 *
 * @param  {string} tagName           - new Element tag name
 * @param  {array|string} classNames  - list or name of CSS classname(s)
 * @param  {Object} attributes        - any attributes
 * @return {Element}
 */
export const make = (tagName, classNames = null, attributes = {}) => {
  let el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames.filter((c) => !!c));
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (let attrName in attributes) {
    // enhanced with setAttribute
    if (attrName === "placeholder") {
      el.setAttribute("placeholder", attributes[attrName]);
    } else if (attrName.indexOf("data-") === 0) {
      el.setAttribute(attrName, attributes[attrName]);
    } else {
      el[attrName] = attributes[attrName];
    }
  }

  return el;
};

/**
 * highlight the setting icon in setting panel
 * example: importScript('//cdn.jsdelivr.net/npm/eruda', ['eruda']).then(([eruda]) => eruda.init())
 * @param src {String} cdn/remote script address
 * @param externals global name exported form window by injected script
 *
 * @returns void
 */
export const importScript = (src, externals = []) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.setAttribute("src", src);
    script.addEventListener("load", () => {
      resolve(
        externals.map((key) => {
          const ext = window[key];
          typeof ext === "undefined" &&
            console.warn(`No external named '${key}' in window`);
          return ext;
        })
      );
    });
    script.addEventListener("error", reject);
    document.body.appendChild(script);
  });
};

/**
 * highlight the setting icon in setting panel
 * @param el {HTMLElement}
 * @param api editor.js's api
 *
 * @returns void
 * @private
 */

export const highlightSettingIcon = (el, api) => {
  if (el.parentNode) {
    const buttons = el.parentNode.querySelectorAll(
      "." + api.styles.settingsButton
    );
    Array.from(buttons).forEach((button) =>
      button.classList.remove(api.styles.settingsButtonActive)
    );
  }

  el.classList.add(api.styles.settingsButtonActive);
};

/**
 * Moves caret to the end of contentEditable element
 * @param {HTMLElement} element - contentEditable element
 */
// export const moveCaretToEnd = (element) => {
//   const range = document.createRange();
//   const selection = window.getSelection();

//   range.selectNodeContents(element);
//   range.collapse(false);
//   selection.removeAllRanges();
//   selection.addRange(range);
// };

/**
 * move caret to end of contentEditable element
 * https://stackoverflow.com/questions/4233265/contenteditable-set-caret-at-the-end-of-the-text-cross-browser
 * @param el {HTMLElement}
 * @return {void}
 * @private
 */
export const moveCaretToEnd = (el) => {
  el.focus();
  if (
    typeof window.getSelection != "undefined" &&
    typeof document.createRange != "undefined"
  ) {
    var range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (typeof document.body.createTextRange != "undefined") {
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
};

// NOTE:  html is string
// see: https://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div
// demo: http://jsfiddle.net/jwvha/1/
export const insertHtmlAtCaret = (html) => {
  let sel, range;

  if (window.getSelection) {
    // IE9 and non-IE
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();

      // Range.createContextualFragment() would be useful here but is
      // non-standard and not supported in all browsers (IE9, for one)
      const el = document.createElement("div");

      el.innerHTML = html;
      var frag = document.createDocumentFragment(),
        node,
        lastNode;

      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);

      // Preserve the selection
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }
};

// select a html node
export const selectNode = function (node) {
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();

    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();

    // range.collapse(true);
    // const startIndex = 6;
    // const endIndex = 7; // node.textContent.length;

    // range.setStart(node.childNodes[0], startIndex);
    // range.setEnd(node.childNodes[0], endIndex);

    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    // console.log('2 -->', range.extractContents());
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
};

/**
 * set display attr for an element selected by css
 * @param css {String}
 * @param attr {String} none | block
 * @return {void}
 */
const setDisplayByClass = (css, attr) => {
  const el = document.querySelector(`.${css}`);
  if (el) {
    el.style.display = attr;
  }
};

/**
 * remove an element selected by css
 * @param css {String}
 * @param attr {String} none | block
 * @return {void}
 */
export const removeElementByClass = (css, attr) => {
  const el = document.querySelector(`.${css}`);

  if (el) {
    el.remove();
  }
};

/**
 * hide all custom inline tools except tool
 * @param tool {String}
 * @param inlineToolCSS {String} default inline toolbar buttons class
 * @return {void}
 */
export const keepCustomInlineToolOnly = (
  tool,
  inlineToolCSS = CSS.editorInlineToolbarWrapper
) => {
  log("keepCustomInlineToolOnly: ", tool);
  // build-in inline tools
  setDisplayByClass(inlineToolCSS, "none");

  if (tool === "mention") {
    setDisplayByClass(CSS.mentionContainer, "block");
    setDisplayByClass(CSS.emojiContainer, "none");
  }

  if (tool === "emoji") {
    setDisplayByClass(CSS.emojiContainer, "block");
    setDisplayByClass(CSS.mentionContainer, "none");
  }
};

/**
 * restore default inline toolbar buttons
 * @param tool {String}
 * @param inlineToolCSS {String} default inline toolbar buttons class
 * @return {void}
 */
export const restoreDefaultInlineTools = (
  inlineToolCSS = CSS.editorInlineToolbarWrapper
) => {
  log("restoreDefaultInlineTools: ", inlineToolCSS);

  setDisplayByClass(inlineToolCSS, "flex");

  setDisplayByClass(CSS.mentionContainer, "none");
  setDisplayByClass(CSS.emojiContainer, "none");
};

/**
 * replace target element with sign(normal text) if the judge element is empty
 * 当 judgeEl 的值为空时，将 targetElement 替换为 sign (普通的 text)
 *
 * @param {HTMLElement} targetEl - target element to replace
 * @param {HTMLElement} judgeEl - judge element, usually input element
 * @param {String} sign - final replace element with this sign
 */
export const convertElementToTextIfNeed = (targetEl, judgeEl, sign = "@") => {
  if (judgeEl.value.trim() === "") {
    targetEl.replaceWith("");
    insertHtmlAtCaret(sign);
  }
};

/**
 * replace target element with sign(normal text) if the judge is true
 * 当 judge 为 true，将 targetElement 替换为 sign (普通的 text)
 *
 * @param {HTMLElement} targetEl - target element to replace
 * @param {HTMLElement} judgeEl - judge element, usually input element
 * @param {String} sign - final replace element with this sign
 */
export const convertElementToText = (targetEl, judge, sign = "@") => {
  if (judgeEl) {
    targetEl.replaceWith("");
    insertHtmlAtCaret(sign);
  }
};

/**
 * replace element wrapper with new html element
 * @param {HTMLElement} before
 * @param {HTMLElement} after
 * @param {object} api - editor.js's API object
 * @return {void}
 */
export const replaceEl = (before, after, api) => {
  before.replaceWith(after);

  if (api) {
    api.tooltip.hide();
    api.toolbar.close();
  }
};

/**
 * show element in array of elements
 * @param {Number} index
 * @param {[HTMLElement]} items
 * @attr {string} display style: block | flex
 */
export const showElement = (index, items, attr = "block") => {
  if (index >= 0) {
    for (let i = 0; i < items.length; i += 1) {
      const el = items[i];

      el.style.display = "none";
    }
    setTimeout(() => {
      items[index].style.display = attr;
    });
  }
};

/**
 * hide all elements
 * @param {[HTMLElement]} elements
 */
export const hideElements = (elements) => {
  for (let i = 0; i < elements.length; i += 1) {
    const el = elements[i];

    el.style.display = "none";
  }
};

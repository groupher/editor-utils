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
  el.focus()
  if (
    typeof window.getSelection != 'undefined' &&
    typeof document.createRange != 'undefined'
  ) {
    var range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)
    var sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
  } else if (typeof document.body.createTextRange != 'undefined') {
    var textRange = document.body.createTextRange()
    textRange.moveToElementText(el)
    textRange.collapse(false)
    textRange.select()
  }
}

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

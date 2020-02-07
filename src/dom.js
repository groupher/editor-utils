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
    Array.from(buttons).forEach(button =>
      button.classList.remove(api.styles.settingsButtonActive)
    );
  }

  el.classList.add(api.styles.settingsButtonActive);
};

/**
 * Moves caret to the end of contentEditable element
 * @param {HTMLElement} element - contentEditable element
 */
export const moveCaretToEnd = element => {
  const range = document.createRange();
  const selection = window.getSelection();

  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
};

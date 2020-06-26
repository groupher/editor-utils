import { handleMDShortcut, handleInlineMDShortcut } from "./triggerHub";

export { debounce } from "debounce";
export { loadJS, make, isEmptyObj, findIndex } from "./utils";
export {
  highlightSettingIcon,
  moveCaretToEnd,
  selectNode,
  insertHtmlAtCaret,
} from "./dom";

export const TriggerHub = {
  handleMDShortcut,
  handleInlineMDShortcut,
};

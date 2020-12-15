import buildLog from "../logger";

const log = buildLog("utils:linkCard");
/**
 * handle link card
 */
export const holder = () => {
  // handle link card
};

// see https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
const URL_PATTERN = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // fragment locator

/**
 * check is current text is valid link
 */
const _isValidURL = (curBlock, data) => {
  const blockText = curBlock.holder.textContent.trim();
  const isFollowedBySpace = data === " " ? true : false;

  log("isValidLink: ", data);

  if (!!URL_PATTERN.test(data) && isFollowedBySpace) {
    return true;
  }

  return false;
};

/**
 * handle link card
 *
 * @param ev {HTMLElementEvent}
 * @param api {Editor.js's api object}
 * @return {void}
 * @private
 */
const handleLinkCard = (ev, api) => {
  const curBlockIndex = api.blocks.getCurrentBlockIndex();
  const curBlock = api.blocks.getBlockByIndex(curBlockIndex);

  if (curBlockIndex < 0 || !curBlock) return false;

  const isValidLink = _isValidURL(curBlock, ev.data);
  log("isValidLink: ", isValidLink);

  if (!isValidLink) return false;

  api.blocks.delete(curBlockIndex);
  api.blocks.insert(
    "link",
    {
      link: "https://codex.so",
      meta: {
        title: "CodeX Team",
        site_name: "CodeX",
        description:
          "Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.",
        image: {
          url: "https://codex.so/public/app/img/meta_img.png",
        },
      },
    },
    {},
    curBlockIndex
  );
  // set cursor to first char
  api.caret.setToBlock(curBlockIndex, "start");
};

export default handleLinkCard;

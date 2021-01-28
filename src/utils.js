// import { limit, length } from "stringz";

/**
 * dynamically load script
 * see https://stackoverflow.com/questions/14521108/dynamically-load-js-inside-js
 * @param {String} url
 * @param {Function} func callback function
 * @param {HTMLElement} location
 */
export const loadJS = function (url, func, location) {
  // url is URL of external file, func is the code
  // to be called from the file, location is the location to
  // insert the <script> element

  let scriptTag = document.createElement("script");

  scriptTag.src = url;

  scriptTag.onload = func;
  scriptTag.onreadystatechange = func;

  location.appendChild(scriptTag);
};

/**
 * dynamically load css script
 * @param {String} url
 * @param {Function} func callback function
 * @param {HTMLElement} location
 */
export const loadCSS = function (url, func, location) {
  // url is URL of external file, func is the code
  // to be called from the file, location is the location to
  // insert the <script> element

  let scriptTag = document.createElement("link");

  scriptTag.rel = "stylesheet";
  scriptTag.src = url;

  scriptTag.onload = func;
  scriptTag.onreadystatechange = func;

  location.appendChild(scriptTag);
};

/* eslint-disable */
// see: https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
export const parseDomain = (url) => {
  try {
    const parsedUrl = {};

    if (url === null || url.length === 0) return parsedUrl;

    const protocolI = url.indexOf("://");
    parsedUrl.protocol = url.substr(0, protocolI);

    const remainingUrl = url.substr(protocolI + 3, url.length);
    let domainI = remainingUrl.indexOf("/");
    domainI = domainI === -1 ? remainingUrl.length - 1 : domainI;
    parsedUrl.domain = remainingUrl.substr(0, domainI);
    parsedUrl.path =
      domainI === -1 || domainI + 1 === remainingUrl.length
        ? null
        : remainingUrl.substr(domainI + 1, remainingUrl.length);

    const domainParts = parsedUrl.domain.split(".");
    switch (domainParts.length) {
      case 2:
        parsedUrl.subdomain = null;
        parsedUrl.host = domainParts[0];
        parsedUrl.tld = domainParts[1];
        break;
      case 3:
        parsedUrl.subdomain = domainParts[0];
        parsedUrl.host = domainParts[1];
        parsedUrl.tld = domainParts[2];
        break;
      case 4:
        parsedUrl.subdomain = domainParts[0];
        parsedUrl.host = domainParts[1];
        parsedUrl.tld = domainParts[2] + "." + domainParts[3];
        break;
    }

    parsedUrl.parent_domain = parsedUrl.host + "." + parsedUrl.tld;

    return parsedUrl.host;
  } catch (e) {
    return "??";
  }
};

/**
 * get query value by name from given url
 *
 * @param {*} name
 * @param {*} url
 */
export const getQueryFromUrl = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

/**
 * check if obj is empty
 *
 * @param {obj} object
 * @returns boolean
 */
export const isEmptyObj = (obj) => {
  for (var x in obj) {
    return false;
  }
  return true;
};

/**
 * findIndex for all browsers
 *
 * @param {array} Array
 * @param {function} perdicate
 * @returns number
 */
export const findIndex = (array, predicate) => {
  const { length } = array;
  let index = -1;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
};

/**
 * see: https://stackoverflow.com/a/44932690/4050784
 * @param {[any]} arr
 * @param {number} from
 * @param {number} to
 */
export const insertAndShift = (arr, from, to) => {
  const cutOut = arr.splice(from, 1)[0]; // cut the element at index 'from'

  arr.splice(to, 0, cutOut); // insert it at index 'to'
};

/**
 * see: https://stackoverflow.com/questions/4011629/swapping-two-items-in-a-javascript-array
 * @param {[any]} arr
 * @param {number} indexA
 * @param {number} indexB
 */
export const swapArrayItems = (arr, indexA, indexB) => {
  const temp = arr[indexA];

  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

/**
 * judge if the value is a string
 * @param {any} value
 * @returns {Boolean}
 */
export const isString = (value) => {
  if (typeof value === "string" || value instanceof String) {
    return true;
  }
  return false;
};

/**
 * Description: Count a string (mixing English and Chinese characters) length.
 *      A basic and rough function.
 * see @link: https://gist.github.com/Alex1990/306422612ede27235c73
 *
 * Performance:
 *      Multiple methods performance test on http://jsperf.com/count-string-length.
 *      You can see that using regexp to check range is very slow from the above test page.
 *
 * @param {String} str
 * @returns {Number}
 */
export const strLen = (str) => {
  let count = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    count += str.charCodeAt(i) < 256 ? 1 : 2;
  }
  return count;
};

/**
 * cut extra length of a string
 * 截取固定长度字符串，并添加省略号（...）
 *
 * NOTE:  这个版本使用简单粗暴的 strLen 方法，缺点是对于 emoji 字符的判断是不准确的
 *
 * @param {*string} str 需要进行处理的字符串，可含汉字
 * @param {*number} len 需要显示多少个汉字，两个英文字母相当于一个汉字
 */
export const cutFrom = (str, len = 20) => {
  if (!str || !isString(str)) return "??...";
  // return len >= length(str) ? str : `${limit(str, len, "")}...`;
  return len >= strLen(str) ? str : `${str.slice(0, len)}...`;
};

/**
 * judge if the given string only has latin string
 * @see @link https://stackoverflow.com/a/2013539/4050784
 * (extend it by add all the symbols and numbers)
 *
 * @param {String} str
 * @returns {Boolean}
 */
export const isLatinString = (str) => {
  const Rex = /^[a-zA-Z0-9,.!#$%&(){}=/<>`@+\|\*\?\s\-_ ’'‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]$/;

  for (let i = 0, len = str.length; i < len; i++) {
    if (!Rex.test(str[i])) {
      return false;
    }
  }

  return true;
};

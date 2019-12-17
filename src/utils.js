/**
 * dynamically load script
 * see https://stackoverflow.com/questions/14521108/dynamically-load-js-inside-js
 * @param {*} url
 * @param {*} func callback function
 * @param {*} location
 */
export const loadJS = function(url, func, location) {
  // url is URL of external file, func is the code
  // to be called from the file, location is the location to
  // insert the <script> element

  let scriptTag = document.createElement("script");

  scriptTag.src = url;

  scriptTag.onload = func;
  scriptTag.onreadystatechange = func;

  location.appendChild(scriptTag);
};

/* eslint-disable */
// see: https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
export const parseDomain = url => {
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
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (let attrName in attributes) {
      // enhanced with setAttribute
      if (attrName === "placeholder") {
        el.setAttribute("placeholder", attributes[attrName]);
      }

      el[attrName] = attributes[attrName];
    }

    return el;
  }

/**
 * highlight the setting icon in setting panel
 * @param el {HTMLElement}
 * @param api editor.js's api
 *
 * @returns void
 * @private
 */

/* export const highlightSettingIcon = (el, api) => { */
  /* if (el.parentNode) { */
    /* const buttons = el.parentNode.querySelectorAll('.' + api.styles.settingsButton); */
    /* Array.from(buttons).forEach( button => button.classList.remove(api.styles.settingsButtonActive)); */
    /* } */
  /*  */
  /* el.classList.add(api.styles.settingsButtonActive); */
  /* } */

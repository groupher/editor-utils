/**
 * check if the given string is a valid https link
 * see https://stackoverflow.com/a/5717133/4050784
 * @param {String} str
 * @returns
 */
export const isValidURL = (str) => {
  const pattern = new RegExp(
    "^(https:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};

export const holder = 1;

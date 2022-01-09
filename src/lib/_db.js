/**
 * Store the meta data in LocalStorage.
 * @param {String} key - The url of the website.
 * @param {Object} meta - The meta data.
 */

export const StoreMeta = (key, meta) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(meta))
  }
}

/**
 * Check if the meta data is stored in LocalStorage.
 * @param {String} key - The url of the website.
 * @param {Array} HrefArray - The array of hrefs present in the DOM.
 * @returns {Array} - The array of hrefs which are not present in LocalStorage.
 */

export const HasMeta = (HrefArray) => HrefArray.filter(Checker)

function Checker (key) {
  return localStorage.getItem(key) === null
}

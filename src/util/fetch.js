/**
 * To fetch the html of a page.
 * @param {Array} UrlArray - The array of URLs to fetch.
 * @returns {Promise} - The html of the page.
 */
export const getHtml = (UrlArray) => Promise.all(UrlArray.map((h) => fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(h)}`
)
  .then((r) => r.json())))

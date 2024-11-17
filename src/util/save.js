// Store the collected data into Local Storage

/**
 * Parse Raw HTML to a DOM tree.
 * @param {string} RawHtml -  Raw HTML.
 * @returns {object} - DOM tree.
 */

export const parseDOM = (RawHtml) => {
  const PARSER = new DOMParser()
  const DOC = PARSER.parseFromString(RawHtml, 'text/html')
  return Promise.resolve(DOC)
}
/**
 * Store the meta data in LocalStorage.
 * @param {String} key - The url of the website.
 * @param {Object} meta - The meta data.
 */

const StoreMeta = (key, meta) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(meta))
  }
}

export const extractMetaTags = (parsedDOM, metaNames, anchorHref) => {
  const METAS = {}
  Array.from(parsedDOM.querySelectorAll('meta'))
    .forEach((el) => {
      const name = el.getAttribute('name') || el.getAttribute('property')
      if (metaNames.includes(name)) {
        METAS[name] = el.getAttribute('content') || 'Not available'
      } else if (!name) {
        // Handle case where name attribute is missing
        const itemprop = el.getAttribute('itemprop')
        if (metaNames.includes(itemprop)) {
          METAS[itemprop] = el.getAttribute('content') || 'Not available'
        }
      }
    })
  // Assign 'Not available' to any missing meta tags
  metaNames.forEach((name) => {
    if (!METAS[name]) {
      METAS[name] = 'Not available'
    }
  })
  StoreMeta(anchorHref, METAS)
  return METAS
}

/**
 * Check if the meta data is stored in LocalStorage.
 * @param {String} key - The url of the website.
 * @param {Array} HrefArray - The array of hrefs present in the DOM.
 * @returns {Array} - The array of hrefs which are not present in LocalStorage.
 */

export const HasMeta = (HrefArray) => Promise.resolve(HrefArray.filter(Checker))

function Checker (key) {
  return localStorage.getItem(key) === null
}

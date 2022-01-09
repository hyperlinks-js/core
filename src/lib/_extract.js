import { StoreMeta } from './_db.js'

/**
 * To extract the meta-tags from the parsed DOM.
 * @param {Object} parsedDOM - The parsed DOM.
 * @param {Object} metaNames - The needed meta-tags.
 * @returns {Object} The meta-tags.
 */

export const extractMetaTags = (parsedDOM, metaNames, anchorHref) => {
  const METAS = {}
  metaNames.map((metaName) => {
    Array.prototype.some.call(parsedDOM.getElementsByTagName('meta'), (el) => {
      if (el.name === metaName) {
        METAS[metaName] = el.content
        return true
      }
      if (el.getAttribute('property') === metaName) {
        METAS[metaName] = el.content
        return true
      }
      METAS[metaName] = 'Not available'
    })
    return METAS
  })
  console.log(METAS)
  StoreMeta(anchorHref, METAS)
  return METAS
}

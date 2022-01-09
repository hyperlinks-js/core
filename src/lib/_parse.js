/**
 * Parse Raw HTML to a DOM tree.
 * @param {string} RawHtml -  Raw HTML.
 * @returns {object} - DOM tree.
 */

export const ParseDOM = (RawHtml) => {
  const PARSER = new DOMParser()
  const DOC = PARSER.parseFromString(RawHtml, 'text/html')
  return DOC
}

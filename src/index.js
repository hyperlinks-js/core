import { getHtml } from "./util/fetch.js";
import { bootLibrary } from "./util/boot.js";
import { parseDOM, extractMetaTags, HasMeta } from "./util/save.js";
import { observer } from "./util/observer.js";

const NEEDEDMETA = ["og:image", "og:url", "og:title", "og:description"];
/* Future meta tags
const titleMetaTags = [
  'og:title',
  'twitter:title'
];

const descriptionMetaTags = [
  'og:description',
  'twitter:description'
];

*/
export async function runner() {
  const hrefArray = await bootLibrary();
  const hrefFiltered = await HasMeta(hrefArray);
  const rawHtmlArray = await getHtml(hrefFiltered);

  for (const element of rawHtmlArray) {
    const parsed = await parseDOM(element.contents);
    extractMetaTags(parsed, NEEDEDMETA, element.status.url);
  }
}

runner();
observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["href"],
});

// Planning on adding more settings to the Tooltip
const hyperlinksSettings = {};

hyperlinksSettings.theme = document
  .querySelector("head")
  .getAttribute("hyperlinksTheme");
console.log(`%c[Hyperlinks] %ctheme : ${hyperlinksSettings.theme}`, "color: cyan", "color: white");

// sdkVersion: 1.0.0

// src/util/fetch.js
var getHtml = (UrlArray) => Promise.all(UrlArray.map((h) => fetch(
  `https://api.allorigins.win/get?url=${encodeURIComponent(h)}`
).then((r) => r.json())));

// src/util/boot.js
var bootLibrary = () => {
  const linksArray = document.querySelectorAll("a.hyperlinks");
  const hrefs = /* @__PURE__ */ new Set();
  return Promise.resolve(
    Array.from(linksArray).filter(
      ({ href }) => !hrefs.has(href) && hrefs.add(href)
    )
  );
};

// src/util/save.js
var parseDOM = (RawHtml) => {
  const PARSER = new DOMParser();
  const DOC = PARSER.parseFromString(RawHtml, "text/html");
  return Promise.resolve(DOC);
};
var StoreMeta = (key, meta) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(meta));
  }
};
var extractMetaTags = (parsedDOM, metaNames, anchorHref) => {
  const METAS = {};
  Array.from(parsedDOM.querySelectorAll("meta")).forEach((el) => {
    const name = el.getAttribute("name") || el.getAttribute("property");
    if (metaNames.includes(name)) {
      METAS[name] = el.getAttribute("content") || "Not available";
    } else if (!name) {
      const itemprop = el.getAttribute("itemprop");
      if (metaNames.includes(itemprop)) {
        METAS[itemprop] = el.getAttribute("content") || "Not available";
      }
    }
  });
  metaNames.forEach((name) => {
    if (!METAS[name]) {
      METAS[name] = "Not available";
    }
  });
  StoreMeta(anchorHref, METAS);
  return METAS;
};
var HasMeta = (HrefArray) => Promise.resolve(HrefArray.filter(Checker));
function Checker(key) {
  return localStorage.getItem(key) === null;
}

// src/util/observer.js
var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      const addedNodes = mutation.addedNodes;
      for (let i = 0; i < addedNodes.length; i++) {
        const node = addedNodes[i];
        if (node.tagName === "A" && node.classList.contains("hyperlinks")) {
          console.log(
            `%c[Hyperlinks] %cAnchor tag added: ${node.href}`,
            "color: cyan",
            "color: white"
          );
          runner();
        }
      }
    } else if (mutation.type === "attributes" && mutation.attributeName === "href") {
      const target = mutation.target;
      if (target.tagName === "A" && target.classList.contains("hyperlinks")) {
        console.log(
          `%c[Hyperlinks] %cAnchor tag href modified: ${target.href}`,
          "color: cyan",
          "color: white"
        );
        runner();
      }
    }
  });
});

// src/index.js
var NEEDEDMETA = ["og:image", "og:url", "og:title", "og:description"];
async function runner() {
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
  attributeFilter: ["href"]
});
var hyperlinksSettings = {};
hyperlinksSettings.theme = document.querySelector("head").getAttribute("hyperlinksTheme");
console.log(`%c[Hyperlinks] %ctheme : ${hyperlinksSettings.theme}`, "color: cyan", "color: white");
export {
  runner
};
//# sourceMappingURL=index.dev.js.map

// Boot the module on DOM content load

export const bootLibrary = () => {
  const linksArray = document.querySelectorAll("a.hyperlinks");
  const hrefs = new Set();
  return Promise.resolve(
    Array.from(linksArray).filter(
      ({ href }) => !hrefs.has(href) && hrefs.add(href)
    )
  );
};

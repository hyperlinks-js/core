import { runner } from "../index.js";

// Create a new MutationObserver
export const observer = new MutationObserver((mutations) => {
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
    } else if (
      mutation.type === "attributes" &&
      mutation.attributeName === "href"
    ) {
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

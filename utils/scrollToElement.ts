export const scrollToElement = function (elementId: string) {
  console.debug("🚀 ~ scrollToElement ~ elementId:", elementId);
  const element = document.getElementById(elementId);
  console.debug("🚀 ~ scrollToElement ~ document:", document);

  element?.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

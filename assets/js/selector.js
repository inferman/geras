const selectorHandler = (() => {
  document.addEventListener("click", e => {
    const elem = e.target;
    if (!elem.closest(".selector-box")) return;
    const currentSelect = elem.closest(".selector-box");
    currentSelect
      .querySelector(".selector_list-block")
      .classList.toggle("hide");
  });
})();

export default selectorHandler;

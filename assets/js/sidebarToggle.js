const toggler = (() => {
  const sidebarTogglerBtn = document.querySelector(".sidebar_toggler-box");
  const sidebarEl = document.querySelector(".sidebar-wrapper");
  sidebarTogglerBtn.addEventListener("click", () => {
    sidebarEl.classList.toggle("active");
  });
})();

export default toggler;

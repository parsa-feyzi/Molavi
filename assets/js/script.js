const menuToggleCheckbox = document.getElementById("menu_toggle_checkbox");
const sidebar = document.getElementById("sidebar");
const menuCover = document.getElementById("menu_cover");

menuToggleCheckbox.addEventListener("change", () => {
  if (menuToggleCheckbox.checked) {
    sidebar.classList.remove("translate-x-[280px]");
    menuCover.classList.remove("hidden");
  } else {
    sidebar.classList.add("translate-x-[280px]");
    menuCover.classList.add("hidden");
  }
});

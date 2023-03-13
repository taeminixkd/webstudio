const refsmenu = {
    openMenuBtn: document.querySelector("[data-open-menu]"),
    closeMenuBtn: document.querySelector("[data-close-menu]"),
    backdrop: document.querySelector("[data-backdropmenu]"),
  };

  refsmenu.openMenuBtn.addEventListener("click", toggleMenu);
  refsmenu.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refsmenu.backdrop.classList.toggle("is-hidden");
  }
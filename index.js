const menu = document.getElementById(`menu`);
const nav = document.getElementById(`link-nav`);
menu.addEventListener(`click`, () => {
  nav.classList.toggle("link-visible");
});

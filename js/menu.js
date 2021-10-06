_ = (el) => document.querySelector(el);
evt = (el, evt, fn) => el.addEventListener(evt, fn);

evt(_(".menu_btn"), "click", () => {
  _(".menu_mobile").classList.toggle("menu_open");
  _(".menu_btn").classList.toggle("menu_btn_close");
});

window.onload = () => {
  const navLinks = _(".menu_mobile nav").children;

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      _(".menu_mobile").classList.toggle("menu_open");
      _(".menu_btn").classList.toggle("menu_btn_close");
    });
  }
};

"use strict";

/* -------------------------------------------------------------------------- */

/*                              Config                                        */

/* -------------------------------------------------------------------------- */
var CONFIG = {
  isNavbarVerticalCollapsed: false,
  theme: 'dark',
  isRTL: false,
  isFluid: true,
  navbarStyle: 'transparent',
  navbarPosition: 'vertical'
};
Object.keys(CONFIG).forEach(function (key) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, CONFIG[key]);
  }
});

if (JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed'))) {
  document.documentElement.classList.add('navbar-vertical-collapsed');
}

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
}
//# sourceMappingURL=config.js.map

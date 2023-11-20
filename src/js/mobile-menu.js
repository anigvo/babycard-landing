const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const pagesLinks = mobileMenu.querySelectorAll('.mobile-menu__link--pages');
const contactsLinks = mobileMenu.querySelectorAll(
  '.mobile-menu__link--contacts'
);
const openMenu = () => {
  mobileMenu.classList.add('is-open');
  openMenuBtn.setAttribute('aria-expanded', true);
  document.body.classList.add('body-scroll-lock');
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  document.body.classList.remove('body-scroll-lock');
};

contactsLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

pagesLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      closeMenu();
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  closeMenu();
});

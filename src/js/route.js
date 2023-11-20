import { mobileMenu } from './mobile-menu';

document.addEventListener('click', e => {
  const isAllowedLink =
    e.target.matches('a[href="/"]') || e.target.matches('a[href="/eng"]');
  if (isAllowedLink) {
    route(e);
    e.preventDefault();
  }
});

const route = e => {
  window.history.pushState({}, '', e.target.href);
  handleLocation();
};

const routers = {
  '/': 'ua.html',
  '/eng': 'eng.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  if (routers[path]) {
    const html = await fetch(routers[path]).then(data => data.text());
    document.querySelector('.content').innerHTML = html;
    mobileMenu();
  } else {
    window.history.pushState({}, '', '/');
    handleLocation();
  }
};

window.onpopstate = handleLocation;
window.route = route;
handleLocation();

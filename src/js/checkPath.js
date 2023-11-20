const currentPath = window.location.pathname;

if (
  currentPath !== '/index.html' &&
  currentPath !== '/eng.html' &&
  currentPath !== '/'
) {
  window.location.href = '/';
}

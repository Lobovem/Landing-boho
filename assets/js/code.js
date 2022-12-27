document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('a')
    .forEach((el) => (el.href = el.href + window.location.search));
});

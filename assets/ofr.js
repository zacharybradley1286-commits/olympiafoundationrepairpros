(function () {
  var btn = document.querySelector('[data-menu-btn]');
  var list = document.getElementById('site-menu');
  if (btn && list) {
    btn.addEventListener('click', function () {
      var open = list.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var here = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.menu a[href]').forEach(function (a) {
    var h = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (h === here) a.setAttribute('aria-current', 'page');
  });
  document.querySelectorAll('form.ask-form input[name="source_page"]').forEach(function (f) {
    if (!f.value) f.value = location.pathname;
  });
})();

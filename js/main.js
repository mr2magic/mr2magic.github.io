// Snuffy Rhino — site interactions

document.addEventListener('DOMContentLoaded', function () {
  initPage();
});

function initPage() {
  // Scroll-triggered reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Close mobile nav on link click
  var navbarCollapseEl = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapseEl && navbarCollapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl).hide();
      }
    });
  });

  // Mark active nav link
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-apple .nav-link').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Contact form — opens default mail client with pre-filled fields
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name    = document.getElementById('name').value.trim();
      var email   = document.getElementById('email').value.trim();
      var reason  = document.getElementById('reason').value;
      var message = document.getElementById('message').value.trim();

      var subject = encodeURIComponent('[Snuffy Rhino] ' + reason);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Subject: ' + reason + '\n\n' +
        message
      );

      window.location.href = 'mailto:dan.horn@me.com?subject=' + subject + '&body=' + body;

      var successMsg = document.getElementById('formSuccessMsg');
      contactForm.classList.add('d-none');
      if (successMsg) successMsg.classList.remove('d-none');
    });
  }
}

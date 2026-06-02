/* ============================================================
   CASE ECOSSISTEMA SARTEC — script.js
============================================================ */

(function () {
  'use strict';

  // ============================================================
  // MOBILE NAV TOGGLE
  // ============================================================
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============================================================
  // SCROLL-BASED NAV BACKGROUND
  // ============================================================
  var header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener('scroll', function () {
      header.style.background = window.scrollY > 40
        ? 'rgba(13,27,42,.98)'
        : 'rgba(13,27,42,.92)';
    }, { passive: true });
  }

  // ============================================================
  // SCROLL ANIMATION (Intersection Observer)
  // ============================================================
  var animatables = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window && animatables.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    animatables.forEach(function (el, i) {
      el.style.transitionDelay = (i % 3) * 80 + 'ms';
      observer.observe(el);
    });
  } else {
    animatables.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ============================================================
  // ACTIVE NAV LINK ON SCROLL
  // ============================================================
  var sections = document.querySelectorAll('section[id]');
  var navLinkEls = document.querySelectorAll('.nav-link');

  if (sections.length && navLinkEls.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinkEls.forEach(function (link) {
              var href = link.getAttribute('href');
              link.style.color = href === '#' + id
                ? 'rgba(255,255,255,1)'
                : '';
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // ============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS (fallback for older browsers)
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      var headerHeight = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

})();

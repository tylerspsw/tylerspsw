/* ============================================================
   script.js — Minimal JS for the Tyler Phosuwan homepage
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. Sticky header: add .scrolled class after scrolling
  ---------------------------------------------------------- */
  var header    = document.getElementById('site-header');
  var threshold = 72; // matches nav height

  function onScroll() {
    if (window.scrollY > threshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load in case page is already scrolled


  /* ----------------------------------------------------------
     2. Mobile nav toggle
  ---------------------------------------------------------- */
  var toggle   = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {

    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // Prevent body scroll when nav is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when any link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close nav on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });

  }

})();

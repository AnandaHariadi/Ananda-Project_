// Lightweight, dependency-free motion directives.
// Registered globally in main.js — usage in templates:
//   v-reveal            -> fade + rise into view on scroll
//   v-reveal="150"      -> same, with a 150ms stagger delay
//   v-reveal:left       -> slide in from the left  (arg: left|right|zoom)
//   v-tilt              -> subtle 3D tilt toward the cursor
//   v-magnetic          -> element drifts toward the cursor (buttons)

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ----------------------------- v-reveal ----------------------------- */
let revealObserver = null;

function getObserver() {
  if (revealObserver) return revealObserver;
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  return revealObserver;
}

export const reveal = {
  mounted(el, binding) {
    if (prefersReduced) {
      el.classList.add('reveal-in');
      return;
    }
    el.classList.add('reveal');
    if (binding.arg) el.classList.add(`reveal-${binding.arg}`);
    const delay = Number(binding.value) || 0;
    if (delay) el.style.transitionDelay = `${delay}ms`;
    getObserver().observe(el);
  },
  unmounted(el) {
    if (revealObserver) revealObserver.unobserve(el);
  },
};

/* ------------------------------ v-tilt ------------------------------ */
export const tilt = {
  mounted(el, binding) {
    if (prefersReduced || window.matchMedia('(pointer: coarse)').matches) return;
    const max = Number(binding.value) || 8; // max degrees
    let raf = null;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(1000px) rotateY(${px * max}deg) rotateX(${-py * max}deg) scale(1.015)`;
      });
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
    };

    el.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
    el.style.transformStyle = 'preserve-3d';
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el._tiltCleanup = () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  },
  unmounted(el) {
    el._tiltCleanup && el._tiltCleanup();
  },
};

/* ---------------------------- v-magnetic ---------------------------- */
export const magnetic = {
  mounted(el, binding) {
    if (prefersReduced || window.matchMedia('(pointer: coarse)').matches) return;
    const strength = Number(binding.value) || 0.35;
    let raf = null;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = 'translate(0,0)';
    };

    el.style.transition = 'transform 0.35s cubic-bezier(0.16,1,0.3,1)';
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el._magCleanup = () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  },
  unmounted(el) {
    el._magCleanup && el._magCleanup();
  },
};

export function registerDirectives(app) {
  app.directive('reveal', reveal);
  app.directive('tilt', tilt);
  app.directive('magnetic', magnetic);
}

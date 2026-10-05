// Shared project page interactions
document.querySelectorAll('[data-reveal]').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      observer.unobserve(entry.target);
    });
  }, {threshold:0.12});
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
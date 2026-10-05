const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('open', !isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  }));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

// Package consultation links
// Replace these two values with your real contact details before publishing.
const CONSULT_EMAIL = 'your-email@example.com';
const WHATSAPP_NUMBER = '91XXXXXXXXXX'; // country code + number, digits only

const consultModal = document.getElementById('consultModal');
const consultPackageName = document.getElementById('consultPackageName');
const consultName = document.getElementById('consultName');
const consultBusiness = document.getElementById('consultBusiness');
const consultContact = document.getElementById('consultContact');
const consultMessage = document.getElementById('consultMessage');
let activeConsultation = null;

function buildConsultMessage(pkg, price, features) {
  const featureLines = features.map(feature => `• ${feature}`).join('\n');
  return `Hi Yasir,\n\nI am interested in the ${pkg} package (${price}).\n\nPackage features:\n${featureLines}\n\nMy requirements / customizations:\n[Please add or edit your requirements here]\n\nName: ${consultName.value || '[Your name]'}\nBusiness / Project: ${consultBusiness.value || '[Business / Project name]'}\nPreferred contact: ${consultContact.value || '[Phone / Email]'}\n\nPlease let me know the next steps and final quotation.`;
}

function openConsultation(button) {
  const features = (button.dataset.features || '').split('|').filter(Boolean);
  activeConsultation = {
    package: button.dataset.package || 'Website Package',
    price: button.dataset.price || '',
    features
  };
  consultPackageName.textContent = `${activeConsultation.package} — ${activeConsultation.price}`;
  consultMessage.value = buildConsultMessage(activeConsultation.package, activeConsultation.price, features);
  consultModal.classList.add('is-open');
  consultModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  setTimeout(() => consultName.focus(), 50);
}

function closeConsultation() {
  consultModal.classList.remove('is-open');
  consultModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activeConsultation = null;
}

document.querySelectorAll('.consult-button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.channel === 'email' || button.dataset.channel === 'whatsapp') {
      openConsultation(button);
      return;
    }
    openConsultation(button);
  });
});

document.querySelectorAll('[data-close-consult]').forEach(el => el.addEventListener('click', closeConsultation));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && consultModal.classList.contains('is-open')) closeConsultation();
});

[consultName, consultBusiness, consultContact].forEach(input => {
  input.addEventListener('input', () => {
    if (!activeConsultation) return;
    const cursor = consultMessage.selectionStart;
    consultMessage.value = buildConsultMessage(activeConsultation.package, activeConsultation.price, activeConsultation.features);
    consultMessage.setSelectionRange(cursor, cursor);
  });
});

document.getElementById('sendConsultEmail')?.addEventListener('click', () => {
  if (!activeConsultation) return;
  const subject = `Consult for package ${activeConsultation.price}`;
  const body = consultMessage.value;
  window.location.href = `mailto:${CONSULT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('sendConsultWhatsApp')?.addEventListener('click', () => {
  if (!activeConsultation) return;
  const body = consultMessage.value;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});


/* Portfolio project filtering */
const projectFilters = document.querySelectorAll('.work-filter');
const projectCards = document.querySelectorAll('.project-showcase .project-card');

function applyProjectFilter(filter) {
  let visibleCount = 0;

  projectCards.forEach(card => {
    const shouldShow = filter === 'all' || card.dataset.status === filter;
    card.classList.toggle('is-hidden', !shouldShow);

    if (shouldShow) {
      visibleCount += 1;
      card.classList.remove('project-filter-match');
      requestAnimationFrame(() => card.classList.add('project-filter-match'));
    }
  });

  projectFilters.forEach(button => {
    const active = button.dataset.projectFilter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });

  return visibleCount;
}

projectFilters.forEach(button => {
  button.addEventListener('click', () => {
    applyProjectFilter(button.dataset.projectFilter || 'all');
  });
});

if (projectFilters.length && projectCards.length) {
  applyProjectFilter('all');
}

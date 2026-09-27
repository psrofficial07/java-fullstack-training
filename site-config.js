const SITE_CONFIG = {
  baseUrl: 'https://psrofficial07.github.io/java-fullstack-training',
  linkedin: 'https://www.linkedin.com/in/pradeepsingh80/',
  github: 'https://github.com/psrofficial07',
  whatsapp: '918209027337',
  email: 'pradeepsb094@gmail.com',
  phone: '+91 8209027337',
  location: 'Bindayaka, Jaipur, Rajasthan 302041'
};

function applySiteConfig() {
  document.querySelectorAll('[data-linkedin]').forEach(el => el.href = SITE_CONFIG.linkedin);
  document.querySelectorAll('[data-github]').forEach(el => el.href = SITE_CONFIG.github);
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    const message = el.getAttribute('data-message') || 'Hi Pradeep, I would like to know more about your Java Full Stack training in Jaipur.';
    el.href = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
  });
  document.querySelectorAll('[data-email]').forEach(el => el.href = `mailto:${SITE_CONFIG.email}`);
  document.querySelectorAll('[data-phone]').forEach(el => el.href = `tel:${SITE_CONFIG.whatsapp}`);
  document.querySelectorAll('[data-base-url]').forEach(el => el.href = SITE_CONFIG.baseUrl + '/');
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', applySiteConfig);

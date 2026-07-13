const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.classList.remove('is-open');
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) closeMenu();
  });
}

const estimateForm = document.getElementById('estimate-form');

if (estimateForm) {
  estimateForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(estimateForm);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const location = String(formData.get('location') || '').trim();
    const details = String(formData.get('details') || '').trim();

    const subject = `Free Estimate Request - ${name || 'Cascade Hauling Customer'}`;
    const body = [
      'Hi Charles,',
      '',
      "I'd like a free estimate from Cascade Hauling Co.",
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Job address or city: ${location}`,
      '',
      'Project details:',
      details,
      '',
      'I will attach photos to this email if available.',
    ].join('\n');

    const mailtoLink = `mailto:charles@cascadehaulingco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

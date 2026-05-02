document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => mobileNav.classList.toggle('active'));
  }

  document.querySelectorAll('[data-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.getAttribute('data-email');
      const parent = button.closest('section') || document;
      const reveal = parent.querySelector('.email-reveal') || document.querySelector('.email-reveal');
      if (reveal) reveal.textContent = email;
      try {
        await navigator.clipboard.writeText(email);
        if (reveal) reveal.textContent = `${email} · copied to clipboard`;
      } catch (_) {
        if (reveal) reveal.textContent = email;
      }
    });
  });
});

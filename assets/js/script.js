document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav')) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }

    const emailReveal = document.getElementById('emailReveal');
    const emailText = document.getElementById('emailText');

    if (emailReveal && emailText) {
        emailReveal.addEventListener('click', async function() {
            const email = emailReveal.dataset.email || 'muanmeurer@gmail.com';
            emailText.textContent = email;
            emailReveal.innerHTML = '<i class="fa-regular fa-copy"></i> Email Shown';

            try {
                await navigator.clipboard.writeText(email);
                emailText.textContent = email + '  — copied to clipboard';
            } catch (error) {
                // Clipboard copy may be blocked on some browsers. Displaying the email is enough.
            }
        });
    }
});

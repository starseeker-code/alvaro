import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

mobileNav();
darkMode();
lazyLoading();

document.getElementById('openDialogBtn').addEventListener('click', function() {
    if (window.innerWidth > 475) {
        document.body.classList.add('dimmed');
        const dialog = document.getElementById('videoDialog');
        dialog.classList.add('show');
        setTimeout(() => {
            dialog.style.display = 'flex';
        }, 10); // slight delay to ensure transition effect
    } else {
        window.open('https://vimeo.com/806713496', '_blank');
    }
});

document.getElementById('closeDialogBtn').addEventListener('click', function() {
    document.body.classList.remove('dimmed');
    const dialog = document.getElementById('videoDialog');
    dialog.classList.remove('show');
    setTimeout(() => {
        dialog.style.display = 'none';
    }, 300); // wait for the transition to complete
});

// Close the dialog when clicking outside the dialog content
window.addEventListener('click', function(event) {
    const dialog = document.getElementById('videoDialog');
    if (event.target === dialog) {
        document.body.classList.remove('dimmed');
        dialog.classList.remove('show');
        setTimeout(() => {
            dialog.style.display = 'none';
        }, 300); // wait for the transition to complete
    }
});

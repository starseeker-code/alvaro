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

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 475) {
        const newHtmlContent = `
            <div id="videoDialog" class="dialog">
                <div class="dialog-content">
                    <span id="closeDialogBtn" class="close">&times;</span>
                    <iframe id="videoFrame" width="560" height="315" src="https://player.vimeo.com/video/806713496?h=80a107f6" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        `;
        let dynamicHtml = document.getElementById('openDialogBtn');
        dynamicHtml.insertAdjacentHTML('afterend', newHtmlContent);
    }

    const openDialogBtn = document.getElementById('openDialogBtn');
    const videoDialog = document.getElementById('videoDialog');
    const closeDialogBtn = document.getElementById('closeDialogBtn');

    openDialogBtn.addEventListener('click', function() {
        if (window.innerWidth > 475) {
            document.body.classList.add('dimmed');
            videoDialog.classList.add('show');
            setTimeout(() => {
                videoDialog.style.display = 'flex';
            }, 10); // slight delay to ensure transition effect
        } else {
            window.open('https://vimeo.com/806713496', '_blank');
        }
    });

    closeDialogBtn.addEventListener('click', function() {
        document.body.classList.remove('dimmed');
        videoDialog.classList.remove('show');
        setTimeout(() => {
            videoDialog.style.display = 'none';
        }, 500); // wait for the transition to complete
    });

    // Close the dialog when clicking outside the dialog content
    window.addEventListener('click', function(event) {
        if (event.target === videoDialog) {
            document.body.classList.remove('dimmed');
            videoDialog.classList.remove('show');
            setTimeout(() => {
                videoDialog.style.display = 'none';
            }, 500); // wait for the transition to complete
        }
    });
});

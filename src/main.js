document.getElementById('openDialogBtn').addEventListener('click', function() {
    document.body.classList.add('dimmed');
    const dialog = document.getElementById('videoDialog');
    dialog.classList.add('show');
    setTimeout(() => {
        dialog.style.display = 'flex';
    }, 10); // slight delay to ensure transition effect
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

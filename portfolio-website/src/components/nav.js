const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetPage = event.target.getAttribute('href');
        window.location.href = targetPage;
    });
});
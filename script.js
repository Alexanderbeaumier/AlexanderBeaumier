document.addEventListener("DOMContentLoaded", function() {
    // Navbar scroll behavior
    const header = document.querySelector('.navbar');
    window.onscroll = function() {
        var top = window.scrollY;
        if(top >= 100) {
            header.classList.add('navbarDark');
        } else {
            header.classList.remove('navbarDark');
        }
    };

    // Smooth scrolling for internal links
    const scrollLinks = document.querySelectorAll('a.nav-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const mailtoLink = `mailto:Alexanderbeaumier3@gmail.com?subject=${encodeURIComponent(formData.get('Subject'))}&body=Name: ${encodeURIComponent(formData.get('Name'))}%0D%0AEmail: ${encodeURIComponent(formData.get('Email'))}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.get('Message'))}`;
        window.location.href = mailtoLink;
    });
});

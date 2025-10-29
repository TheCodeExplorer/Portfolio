
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["passionate web developer.", "creative designer.", "problem solver."],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };

    var typed = new Typed('#typed-text', options);

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;

            projects.forEach(project => {
                if (category === 'all' || project.dataset.category === category) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted!');
            const formData = new FormData(contactForm);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

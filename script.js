document.addEventListener('DOMContentLoaded', () => {

    // 1. Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };


    // 2. Dynamic Text Animation (Typing Effect)
    const dynamicText = document.querySelector('.dynamic-text');
    const words = ["Web Developer", "Data Enthusiast", "Tech Innovator", "Blockchain Learner"];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        dynamicText.textContent = currentChar;
        dynamicText.classList.add('stop-blinking');

        if (!isDeleting && charIndex < currentWord.length) {
            // If condition is true, type the next character
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            // If condition is true, remove the previous character
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            // If word is deleted then switch to the next word
            isDeleting = !isDeleting;
            dynamicText.classList.remove('stop-blinking');
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, 1200);
        }
    }

    typeEffect();
});
// Nav Bar Responsiveness

const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbar__toggle");

navbarToggle.addEventListener("click", () => {
    navbar.classList.toggle("responsive");
});



// Typewritter Effect

class TypewriterEffect {
    constructor(textContainer, wordList, wait = 2000) {
        this.textContainer = textContainer;
        this.text = '';
        this.wordList = wordList;
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const currentWord = this.wordList[this.wordIndex % this.wordList.length];
        const isComplete = !this.isDeleting && this.text === currentWord;

        this.text = this.isDeleting
            ? currentWord.substring(0, this.text.length - 1)
            : currentWord.substring(0, this.text.length + 1);

        this.textContainer.innerHTML = `<span class="text">${this.text}</span>`;

        let typeSpeed = this.isDeleting ? 100 : 200; // Speed during delete vs. typing

        if (isComplete) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 400;
        }
        requestAnimationFrame(() => setTimeout(() => this.type(), typeSpeed));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.querySelector('.typewriter-effect__text');
    const wordList = JSON.parse(textContainer.getAttribute('data-words'));
    const wait = textContainer.getAttribute('data-wait') || 2000;

    new TypewriterEffect(textContainer, wordList, wait);
});



// Gsap Animation

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
    }
})

tl.to('.welcome-section__text', {y: '0%', duration: 1, stagger: 0.5});
tl.to('.slider',{y: "-100%", duration: 1.5, delay: 0.5});
tl.to('#welcome-section',{y: "-100%", duration: 1}, "-=1");
tl.fromTo('#navbar', {opacity: 0}, {opacity: 1, duration :1});
tl.fromTo('#intro-section', {opacity: 0}, {opacity: 1, duration :1}), "-=1";
tl.fromTo('#intro', {opacity: 0}, {opacity: 1, duration :2, delay: 1});

tl2.from("#contact", {y: 200, opacity: 0, duration: 2,stagger: 0.2})
// NAV BAR RESPONSIVENESS

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// TYPEWRITER EFFECT

const typeWriter = function (txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
typeWriter.prototype.type = function () {
    // Current Index of Words
    const current = this.wordIndex % this.words.length;
    // Get Full Text of the Current Word
    const fullTxt = this.words[current];
    // Check if deleting 
    if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    // Insert txt Into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    // If The Word Is Complete
    if (!this.isDeleting && this.txt == fullTxt) {
        // Pause at the end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting & this.txt === "") {
        this.isDeleting = false;
        // Move to the next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new typeWriter(txtElement, words, wait);

}

// ANIMATION

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: 1, stagger: 0.5});

tl.to('.slider',{y: "-100%", duration: 1.5, delay: 0.5});

tl.to('.first-intro',{y: "-100%", duration: 1}, "-=1");

tl.fromTo('#navbar', {opacity: 0}, {opacity: 1, duration :1});

tl.fromTo('.welcome-section', {opacity: 0}, {opacity: 1, duration :1}), "-=1";

tl.fromTo('#intro', {opacity: 0}, {opacity: 1, duration :2, delay: 1});


let tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: "#projects",
  }
})
tl2.from("#projects", {y: 200, opacity: 0, duration: 3})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
    }
})
tl2.from("#contact", {y: 200, opacity: 0, duration: 2,stagger: 0.2})
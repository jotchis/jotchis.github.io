const words = ["AUTOMATIZA", "EVOLUCIONA", "TRANSFORMA"];
let currentWordIndex = 0;
const wordWrapper = document.querySelector('.cd-words-wrapper');
let changeWord = function() {
  // Desvanecer la palabra actual
  wordWrapper.classList.remove('is-visible');
  setTimeout(() => {
    // Cambiar la palabra
    wordWrapper.innerHTML = words[currentWordIndex];
    wordWrapper.classList.add('is-visible');
    currentWordIndex = (currentWordIndex + 1) % words.length;
  }, 1000); // Esperar la duración de la transición de opacidad para cambiar la palabra

  setTimeout(changeWord, 3500); // Cambiar palabra cada 3 segundos
};

window.onload = function() {
  changeWord(); // Iniciar la secuencia de cambio de palabras
};

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Esto alternará la visibilidad del menú
    });
});








// Función que se ejecuta una vez cargado el contenido del DOM
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de partículas para 'particles-js'
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 3, direction: "none", random: false, straight: false, out_mode: "out", bounce: false },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            },
        },
        retina_detect: true,
    });

    // Registro del plugin ScrollTrigger de GSAP para animar los elementos del logo
    gsap.registerPlugin(ScrollTrigger);

    // Animación del hemisferio izquierdo del cerebro
    gsap.from("#left-brain", {
        x: 0,
        scrollTrigger: {
            trigger: "#logo-container",
            start: "top center",
            end: "bottom top",
            scrub: true,
            onEnter: () => gsap.to("#left-brain", {x: -50}),
            onLeaveBack: () => gsap.to("#left-brain", {x: 0})
        }
    });

    // Animación del hemisferio derecho del cerebro
    gsap.from("#right-brain", {
        x: 0,
        scrollTrigger: {
            trigger: "#logo-container",
            start: "top center",
            end: "bottom top",
            scrub: true,
            onEnter: () => gsap.to("#right-brain", {x: 50}),
            onLeaveBack: () => gsap.to("#right-brain", {x: 0})
        }
    });


});

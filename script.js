/* =========================================
   HUT RI 81 - JAVASCRIPT
========================================= */


/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 900);

});


/* =========================================
   NAVBAR
========================================= */

const navbar =
    document.getElementById("navbar");

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active")
            ? "✕"
            : "☰";

});


document.querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   COUNTDOWN
========================================= */

/*
    Countdown menuju:
    17 Agustus 2026
*/

const independenceDate =
    new Date("August 17, 2027 00:00:00").getTime();

function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        independenceDate - now;


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .textContent =
        Math.max(0, days)
            .toString()
            .padStart(2, "0");

    document.getElementById("hours")
        .textContent =
        Math.max(0, hours)
            .toString()
            .padStart(2, "0");

    document.getElementById("minutes")
        .textContent =
        Math.max(0, minutes)
            .toString()
            .padStart(2, "0");

    document.getElementById("seconds")
        .textContent =
        Math.max(0, seconds)
            .toString()
            .padStart(2, "0");


    if (distance <= 0) {

    document.querySelector(".countdown-heading h2")
        .textContent =
        "SELAMAT HUT RI KE-82!";

    }

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                    observer
                        .unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.13
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   PARTICLES
========================================= */

const particles =
    document.getElementById("particles");


function createParticles(count = 45) {

    for (let i = 0; i < count; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        const size =
            Math.random() * 3 + 1;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${Math.random() * 12 + 8}s`;

        particle.style.animationDelay =
            `${Math.random() * 8}s`;

        particles.appendChild(particle);

    }

}


createParticles();


/* =========================================
   RANDOM MESSAGE
========================================= */

const messages = [

    "Jadilah generasi yang membawa perubahan positif bagi Indonesia.",

    "Belajar hari ini untuk membangun Indonesia esok hari.",

    "Kemerdekaan harus diisi dengan karya, bukan hanya dirayakan.",

    "Perbedaan bukan alasan untuk terpecah, tetapi kekuatan untuk bersatu.",

    "Generasi muda adalah bagian penting dari masa depan Indonesia.",

    "Mari jaga persatuan dan terus berkarya untuk negeri.",

    "Bangga menjadi bagian dari Indonesia yang beragam.",

    "Kecil kontribusinya, besar manfaatnya untuk bangsa.",

    "Indonesia maju dimulai dari generasi yang mau belajar.",

    "Mari menjadi warga Indonesia yang bertanggung jawab."
];


const messageButton =
    document.getElementById("messageButton");

const messageDisplay =
    document.getElementById("messageDisplay");


messageButton.addEventListener("click", () => {

    const randomIndex =
        Math.floor(
            Math.random() *
            messages.length
        );

    const message =
        messages[randomIndex];


    messageDisplay.querySelector("p")
        .textContent =
        `"${message}"`;


    messageDisplay.animate(
        [
            {
                opacity: 0,
                transform:
                    "scale(.9)"
            },

            {
                opacity: 1,
                transform:
                    "scale(1)"
            }
        ],
        {
            duration: 500,
            easing:
                "cubic-bezier(.2,.8,.2,1)"
        }
    );

});


/* =========================================
   TOAST
========================================= */

const toast =
    document.getElementById("toast");


function showToast(text) {

    toast.textContent = text;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


/* =========================================
   SOUND EFFECT
========================================= */

const musicButton =
    document.getElementById("musicButton");

let audioContext = null;


function createClickSound() {

    /*
        Membuat efek suara sederhana
        menggunakan Web Audio API.
        Tidak membutuhkan file mp3.
    */

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
        523.25,
        audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        783.99,
        audioContext.currentTime + .12
    );


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.15,
        audioContext.currentTime + .02
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + .25
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + .25
    );

}


musicButton.addEventListener("click", () => {

    createClickSound();

    showToast("🇮🇩 MERDEKA!");

});


/* =========================================
   BUTTON MICRO INTERACTION
========================================= */

document.querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener(
            "mousedown",
            () => {

                button.style.transform =
                    "scale(.97)";

            }
        );

        button.addEventListener(
            "mouseup",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


/* =========================================
   PARALLAX HERO
========================================= */

const heroVisual =
    document.querySelector(".hero-visual");


window.addEventListener("mousemove", (event) => {

    if (
        window.innerWidth < 900 ||
        !heroVisual
    ) {
        return;
    }


    const x =
        (event.clientX /
            window.innerWidth - .5);

    const y =
        (event.clientY /
            window.innerHeight - .5);


    heroVisual.style.transform =
        `
        translate(
            ${x * 18}px,
            ${y * 18}px
        )
        `;
});


/* =========================================
   ACTIVE SECTION NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("main section[id]");

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >=
            sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   CONSOLE
========================================= */

console.log(
    "%c🇮🇩 HUT RI KE-81",
    "font-size:25px;font-weight:bold;color:#e50914;"
);

console.log(
    "%cIndonesia Berdaulat, Adil, dan Makmur",
    "font-size:14px;color:#555;"
);
 window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        setInterval(nextSlide, 5000);

        function setTheme(themeName) {
            document.documentElement.setAttribute('data-theme', themeName);
            const themeIcon = document.getElementById('themeIcon');

            if (themeName === 'light') {
                if (themeIcon) {
                    themeIcon.className = 'ph ph-sun';
                }
            } else {
                if (themeIcon) {
                    themeIcon.className = 'ph ph-moon';
                }
            }
            localStorage.setItem('activa_theme', themeName);
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        }

        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('activa_theme') || 'light';
            setTheme(savedTheme);
        });

        const observerOptions = { threshold: 0.5 };
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000;
                        const increment = target / (duration / 16);
                        let current = 0;

                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target >= 1000 ? target.toLocaleString('es-CO') : target;
                            }
                        };
                        updateCounter();
                        counter.classList.remove('counter');
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        function toggleAccessibilityDrawer() {
            const drawer = document.getElementById('accessibilityDrawer');
            drawer.classList.toggle('open');
        }

        function toggleAccFeature(featureName, cardElement) {
            document.body.classList.toggle(`acc-${featureName}`);
            cardElement.classList.toggle('active');
        }

        function resetAccessibility() {
            const features = ['contrast', 'highlight-links', 'large-text', 'text-spacing', 'stop-animations', 'hide-images', 'dyslexia', 'big-cursor'];
            features.forEach(f => {
                document.body.classList.remove(`acc-${f}`);
            });
            document.querySelectorAll('.acc-card').forEach(card => card.classList.remove('active'));
        }

        let isScrolledDown = false;
        function toggleScrollDirection() {
            const scrollIcon = document.getElementById('scrollIcon');
            if (!isScrolledDown) {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        window.addEventListener('scroll', () => {
            const scrollIcon = document.getElementById('scrollIcon');
            if (window.scrollY > 300) {
                isScrolledDown = true;
                scrollIcon.className = 'ph ph-arrow-up';
                document.getElementById('scrollToggleBtn').setAttribute('title', 'Ir arriba');
            } else {
                isScrolledDown = false;
                scrollIcon.className = 'ph ph-arrow-down';
                document.getElementById('scrollToggleBtn').setAttribute('title', 'Ir abajo');
            }
        });

        const btnSubir = document.querySelector('.btn-subir');

window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {
        btnSubir.style.display = 'flex';
    }

});

btnSubir.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/* =========================================================
   CARRUSEL CLIENTES
========================================================= */

const clientsTrack = document.querySelector('.clients-track');
const clientsPrev = document.querySelector('.clients-prev');
const clientsNext = document.querySelector('.clients-next');

if (clientsTrack && clientsPrev && clientsNext) {

    let clientsPosition = 0;

    const clientsStep = 204;


    /* =====================================================
       AVANZAR
    ===================================================== */

    function moveClientsNext() {

        const maxPosition =
            clientsTrack.scrollWidth -
            clientsTrack.parentElement.clientWidth;


        if (clientsPosition >= maxPosition) {

            clientsPosition = 0;

        } else {

            clientsPosition += clientsStep;

            if (clientsPosition > maxPosition) {
                clientsPosition = maxPosition;
            }

        }


        clientsTrack.style.transform =
            `translateX(-${clientsPosition}px)`;

    }


    /* =====================================================
       RETROCEDER
    ===================================================== */

    function moveClientsPrev() {

        const maxPosition =
            clientsTrack.scrollWidth -
            clientsTrack.parentElement.clientWidth;


        if (clientsPosition <= 0) {

            clientsPosition = maxPosition;

        } else {

            clientsPosition -= clientsStep;

            if (clientsPosition < 0) {
                clientsPosition = 0;
            }

        }


        clientsTrack.style.transform =
            `translateX(-${clientsPosition}px)`;

    }


    /* =====================================================
       BOTÓN SIGUIENTE
    ===================================================== */

    clientsNext.addEventListener('click', () => {

        moveClientsNext();

    });


    /* =====================================================
       BOTÓN ANTERIOR
    ===================================================== */

    clientsPrev.addEventListener('click', () => {

        moveClientsPrev();

    });


    /* =====================================================
       MOVIMIENTO AUTOMÁTICO
    ===================================================== */

    setInterval(() => {

        moveClientsNext();

    }, 4000);

}

/* ================= BUSCADOR ================= */

const searchButton = document.getElementById('searchButton');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');


if (searchButton && searchOverlay) {

    searchButton.addEventListener('click', () => {

        searchOverlay.classList.add('active');

        document.body.style.overflow = 'hidden';

        setTimeout(() => {

            if (searchInput) {
                searchInput.focus();
            }

        }, 400);

    });

}


if (searchClose && searchOverlay) {

    searchClose.addEventListener('click', () => {

        searchOverlay.classList.remove('active');

        document.body.style.overflow = '';

    });

}

/* =========================================================
   MENÚ HAMBURGUESA
========================================================= */

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {

    /* ================================================
       ABRIR / CERRAR MENÚ PRINCIPAL
    ================================================ */

    menuToggle.addEventListener('click', () => {

        navMenu.classList.toggle('active');

        const isOpen =
            navMenu.classList.contains('active');

        menuToggle.setAttribute(
            'aria-expanded',
            isOpen
        );

        menuToggle.innerHTML = isOpen
            ? '<i class="ph ph-x"></i>'
            : '<i class="ph ph-list"></i>';

    });


    /* ================================================
       SUBMENÚS PRINCIPALES
    ================================================ */

    const dropdowns =
        navMenu.querySelectorAll(
            ':scope > .nav-dropdown'
        );


    dropdowns.forEach(dropdown => {

        const mainLink =
            dropdown.querySelector(':scope > a');

        const submenu =
            dropdown.querySelector(
                ':scope > .transparency-menu'
            );


        if (!mainLink || !submenu) return;


        mainLink.addEventListener('click', event => {

            /*
             * Solo hacemos esto en tablet/celular.
             * En PC se mantiene el comportamiento normal.
             */

            if (window.innerWidth <= 1024) {

                event.preventDefault();

                /* Cerramos otros dropdowns */

                dropdowns.forEach(otherDropdown => {

                    if (otherDropdown !== dropdown) {

                        otherDropdown.classList.remove(
                            'open'
                        );

                    }

                });


                /* Abrimos/cerramos el actual */

                dropdown.classList.toggle('open');

            }

        });

    });


    /* ================================================
       SUBMENÚS INTERNOS
    ================================================ */

    const nestedDropdowns =
        navMenu.querySelectorAll(
            '.has-submenu'
        );


    nestedDropdowns.forEach(dropdown => {

        const link =
            dropdown.querySelector(':scope > a');

        const submenu =
            dropdown.querySelector(
                ':scope > .transparency-submenu'
            );


        if (!link || !submenu) return;


        link.addEventListener('click', event => {

            if (window.innerWidth <= 1024) {

                event.preventDefault();

                dropdown.classList.toggle('open');

            }

        });

    });


    /* ================================================
       AL VOLVER A PC
       LIMPIAMOS LOS ESTADOS MOBILE
    ================================================ */

    window.addEventListener('resize', () => {

        if (window.innerWidth > 1024) {

            navMenu.classList.remove('active');

            navMenu
                .querySelectorAll('.open')
                .forEach(item => {

                    item.classList.remove('open');

                });

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

            menuToggle.innerHTML =
                '<i class="ph ph-list"></i>';

        }

    });

}

/* =========================================================
   CARRUSEL 3D DE NOTICIAS — BUCLE INFINITO
========================================================= */

(function init3DCarousel() {

    const slides = document.querySelectorAll('.news-slide');
    const prevBtn = document.getElementById('newsSliderPrev');
    const nextBtn = document.getElementById('newsSliderNext');
    const dotsContainer = document.getElementById('newsSliderDots');

    if (!slides.length) return;

    let currentIndex = 0;

    const totalSlides = slides.length;

    /* Tiempo entre imágenes */
    const autoplayDelay = 4000;

    let autoplayTimer;


    /* =====================================================
       CREAR DOTS
    ===================================================== */

    if (dotsContainer) {

        dotsContainer.innerHTML = '';

        slides.forEach((_, index) => {

            const dot = document.createElement('button');

            dot.classList.add('news-slider-dot');

            dot.setAttribute(
                'aria-label',
                `Mostrar imagen ${index + 1}`
            );

            dot.addEventListener('click', () => {

                update3DSlider(index);

                restartAutoplay();

            });

            dotsContainer.appendChild(dot);

        });

    }


    const dots = dotsContainer
        ? dotsContainer.querySelectorAll('.news-slider-dot')
        : [];


    /* =====================================================
       ACTUALIZAR CARRUSEL
    ===================================================== */

    function update3DSlider(index) {

        /*
         * Nos aseguramos de que el índice siempre
         * permanezca dentro del rango 0 → totalSlides - 1
         */

        currentIndex =
            (index + totalSlides) % totalSlides;


        /* Todos ocultos */

        slides.forEach(slide => {

            slide.classList.remove(
                'active',
                'prev',
                'next',
                'hidden'
            );

            slide.classList.add('hidden');

        });


        /* Quitar estado activo de dots */

        dots.forEach(dot => {

            dot.classList.remove('active');

        });


        /* =================================================
           CALCULAR ANTERIOR Y SIGUIENTE
        ================================================= */

        const prevIndex =
            (currentIndex - 1 + totalSlides) % totalSlides;

        const nextIndex =
            (currentIndex + 1) % totalSlides;


        /* =================================================
           ASIGNAR POSICIONES
        ================================================= */

        slides[currentIndex].classList.remove('hidden');
        slides[currentIndex].classList.add('active');


        slides[prevIndex].classList.remove('hidden');
        slides[prevIndex].classList.add('prev');


        slides[nextIndex].classList.remove('hidden');
        slides[nextIndex].classList.add('next');


        /* =================================================
           DOT ACTIVO
        ================================================= */

        if (dots[currentIndex]) {

            dots[currentIndex].classList.add('active');

        }

    }


    /* =====================================================
       SIGUIENTE
    ===================================================== */

    function nextSlide() {

        update3DSlider(
            currentIndex + 1
        );

    }


    /* =====================================================
       ANTERIOR
    ===================================================== */

    function previousSlide() {

        update3DSlider(
            currentIndex - 1
        );

    }


    /* =====================================================
       BOTONES
    ===================================================== */

    if (nextBtn) {

        nextBtn.addEventListener('click', () => {

            nextSlide();

            restartAutoplay();

        });

    }


    if (prevBtn) {

        prevBtn.addEventListener('click', () => {

            previousSlide();

            restartAutoplay();

        });

    }


    /* =====================================================
       CLICK EN LAS IMÁGENES LATERALES
    ===================================================== */

    slides.forEach((slide, index) => {

        slide.addEventListener('click', () => {

            if (slide.classList.contains('next')) {

                nextSlide();

                restartAutoplay();

            }

            if (slide.classList.contains('prev')) {

                previousSlide();

                restartAutoplay();

            }

        });

    });


    /* =====================================================
       AUTOPLAY
    ===================================================== */

    function startAutoplay() {

        autoplayTimer = setInterval(() => {

            nextSlide();

        }, autoplayDelay);

    }


    /* =====================================================
       REINICIAR AUTOPLAY
    ===================================================== */

    function restartAutoplay() {

        clearInterval(autoplayTimer);

        startAutoplay();

    }


    /* =====================================================
       PAUSAR AL PASAR EL MOUSE
    ===================================================== */

    const slider = document.getElementById('newsSlider');

    if (slider) {

        slider.addEventListener('mouseenter', () => {

            clearInterval(autoplayTimer);

        });


        slider.addEventListener('mouseleave', () => {

            startAutoplay();

        });

    }


    /* =====================================================
       INICIAR
    ===================================================== */

    update3DSlider(0);

    startAutoplay();

})();

    /* =====================================================
       NOTICIAS GENERALES — CARRUSEL AUTOMÁTICO
    ===================================================== */


document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".general-news-slide");

    if (!slides.length) return;

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 3000);

});
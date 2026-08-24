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


const clientsTrack = document.querySelector('.clients-track');
const clientsPrev = document.querySelector('.clients-prev');
const clientsNext = document.querySelector('.clients-next');

let clientsPosition = 0;

const clientsStep = 204;


/* Avanzar */

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


/* Retroceder */

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


/* Flecha derecha */

clientsNext.addEventListener('click', () => {
    moveClientsNext();
});


/* Flecha izquierda */

clientsPrev.addEventListener('click', () => {
    moveClientsPrev();
});


/* Movimiento automático cada 5 segundos */

setInterval(() => {
    moveClientsNext();
}, 4000);

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

/* ================= MENÚ HAMBURGUESA ================= */

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {

    menuToggle.addEventListener('click', () => {

        navMenu.classList.toggle('active');

        const isOpen = navMenu.classList.contains('active');

        menuToggle.setAttribute('aria-expanded', isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="ph ph-x"></i>'
            : '<i class="ph ph-list"></i>';

    });

}

(function init3DCarousel() {
    const slides = document.querySelectorAll('.news-slide');
    const prevBtn = document.getElementById('newsSliderPrev');
    const nextBtn = document.getElementById('newsSliderNext');
    const dotsContainer = document.getElementById('newsSliderDots');

    if (slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Limpiar los puntos por si hay recargas
    if (dotsContainer) dotsContainer.innerHTML = '';

    // Crear los indicadores (dots) dinámicamente
    slides.forEach((_, index) => {
        if (dotsContainer) {
            const dot = document.createElement('button');
            dot.classList.add('news-slider-dot');
            dot.addEventListener('click', () => update3DSlider(index));
            dotsContainer.appendChild(dot);
        }
    });

    const dots = document.querySelectorAll('.news-slider-dot');

    function update3DSlider(index) {
        currentIndex = index;

        // Primero, forzamos a que todas las tarjetas sean "hidden"
        slides.forEach(slide => {
            slide.className = 'news-slide hidden'; 
        });
        
        dots.forEach(dot => dot.classList.remove('active'));

        // Calcular los índices del bucle (infinito)
        const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        const nextIndex = (currentIndex + 1) % totalSlides;

        // Asignar los estados 3D correctos
        slides[currentIndex].classList.replace('hidden', 'active');
        slides[prevIndex].classList.replace('hidden', 'prev');
        slides[nextIndex].classList.replace('hidden', 'next');

        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    // Eventos de botones (flechas)
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            update3DSlider((currentIndex + 1) % totalSlides);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            update3DSlider((currentIndex - 1 + totalSlides) % totalSlides);
        });
    }

    // Permitir clic en las imágenes de los lados para avanzar o retroceder
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('prev') || slide.classList.contains('next')) {
                update3DSlider(index);
            }
        });
    });

    // Arrancar el carrusel en la primera imagen
    update3DSlider(0);
})();
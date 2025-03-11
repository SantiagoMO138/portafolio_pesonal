// 1. Navegación suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Galería interactiva (modal)
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImage.src = this.src;
        modalImage.alt = this.alt;
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


// 3. Animación de las barras de progreso cuando la sección es visible
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');
let hasAnimated = false; // Bandera para evitar animaciones repetidas

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            progressBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
                bar.style.transition = 'width 1.5s ease-in-out';
            });
            hasAnimated = true; // Marca como animado
            observer.unobserve(skillsSection); // Deja de observar tras la animación
        }
    });
}, {
    threshold: 0.80 // Se activa cuando el 50% de la sección es visible
});

observer.observe(skillsSection);
// 4. Validación básica del formulario
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío real porque no hay backend
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('¡Formulario enviado con éxito! (Simulación)');
        form.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// 5. Menú desplegable
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
});
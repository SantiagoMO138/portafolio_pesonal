document.addEventListener('DOMContentLoaded', function () {
    console.log("Documento cargado. Iniciando scripts...");

    // 1. Navegación suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');

            // Verificar si el ID existe en el documento
            const targetSection = document.querySelector(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Sección no encontrada: ${sectionId}`);
            }
        });
    });

    // 3. Animación de las barras de progreso
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress-bar');
    let hasAnimated = false;

    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    console.log("Sección de habilidades visible, iniciando animación...");

                    progressBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width');

                        bar.style.transition = 'none'; // Resetear la transición
                        bar.style.width = '0%'; // Reiniciar barra
                        getComputedStyle(bar).width; // Forzar reflujo

                        // Agregar la animación con un pequeño retraso
                        requestAnimationFrame(() => {
                            bar.style.transition = 'width 1.5s ease-in-out';
                            bar.style.width = targetWidth;
                        });
                    });

                    hasAnimated = true;
                    observer.unobserve(skillsSection);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(skillsSection);
    }

    // 4. Validación del formulario con Bootstrap
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (form.checkValidity()) {
                alert('¡Formulario enviado con éxito! (Simulación)');
                form.reset();
            } else {
                e.stopPropagation();
                alert('Por favor, completa todos los campos correctamente.');
            }
            form.classList.add('was-validated');
        }, false);
    }

    // 5. Menú desplegable de Bootstrap
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    } else {
        console.warn("El menú no se encontró en el documento.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');

    if (galleryModal && modalImage) {
        galleryModal.addEventListener('show.bs.modal', function (event) {
            // Obtener la imagen que disparó el evento
            const clickedImage = event.relatedTarget; // relatedTarget es la imagen clicada
            if (clickedImage) {
                modalImage.src = clickedImage.src; // Actualiza el src
                modalImage.alt = clickedImage.alt; // Actualiza el alt
            } else {
                console.warn("No se pudo encontrar la imagen que disparó el modal.");
            }
        });
    } else {
        console.warn("El modal o la imagen del modal no están en el DOM.");
    }
});
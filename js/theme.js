// Función para cambiar el tema
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (isDarkMode) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeText.textContent = 'Modo Oscuro';
        localStorage.setItem('theme', 'light');
    }
}

// Función para inicializar el tema
function initializeTheme() {
    const toggleThemeButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (!toggleThemeButton || !themeIcon || !themeText) return;

    // Aplicar tema según localStorage o preferencia del sistema
    const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Establecer el estado inicial sin alternarlo
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeText.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeText.textContent = 'Modo Oscuro';
    }

    // Evento para cambiar tema al hacer clic
    toggleThemeButton.addEventListener('click', toggleTheme);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeTheme);
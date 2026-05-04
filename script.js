// ==========================================
// 1. SISTEMA DE NAVEGACIÓN Y ACTIVE STATE
// ==========================================
function cambiarPantalla(idPantalla, botonPresionado) {
    // Ocultar todas las pantallas
    const pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(p => p.classList.remove('activa'));
    
    // Mostrar solo la pantalla seleccionada
    document.getElementById(idPantalla).classList.add('activa');

    // Quitar el estado "marcado" de todos los botones del menú
    const botones = document.querySelectorAll('.btn-nav');
    botones.forEach(b => b.classList.remove('active-nav'));

    // Marcar el botón que se acaba de presionar (si es parte del menú)
    if (botonPresionado && botonPresionado.classList.contains('btn-nav')) {
        botonPresionado.classList.add('active-nav');
    }
}

// ==========================================
// 2. SISTEMA DE VENTANAS EMERGENTES (MODALES)
// ==========================================

// Función para abrir la ventana
function abrirModal(idModal) {
    document.getElementById(idModal).style.display = 'flex';
}

// Función para cerrar la ventana con la "X"
function cerrarModal(idModal) {
    document.getElementById(idModal).style.display = 'none';
}

// Función para cerrar la ventana si el usuario da clic en el fondo oscuro
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
    }
}

// ==========================================
// 3. MENÚ RESPONSIVO (MÓVILES)
// ==========================================

function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.overlay-menu').classList.toggle('open');
}

// Esperamos a que todo el HTML cargue antes de asignarle clics a los botones
document.addEventListener("DOMContentLoaded", () => {
    // Cierra el menú al hacer clic en cualquier botón de navegación (solo en celulares)
    document.querySelectorAll('.btn-nav, .btn-contacto').forEach(btn => {
        btn.addEventListener('click', () => {
            if(window.innerWidth <= 850) {
                document.querySelector('.sidebar').classList.remove('open');
                document.querySelector('.overlay-menu').classList.remove('open');
            }
        });
    });
});

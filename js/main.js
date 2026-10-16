// Filtro de categorías
const botones = document.querySelectorAll('.btn-categoria');
const platillos = document.querySelectorAll('.tarjeta-platillo');

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.getAttribute('data-categoria');

        platillos.forEach(platillo => {
            if (categoria === 'todos' || platillo.getAttribute('data-categoria') === categoria) {
                platillo.style.display = 'block';
            } else {
                platillo.style.display = 'none';
            }
        });
    });
});

let platilloSeleccionado = '';

// Modal de detalles de platillo
function abrirModal(titulo, img, desc) {
    platilloSeleccionado = titulo;
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-platillo').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal-platillo').style.display = 'none';
}

function pedirPlatillo() {
    const mensaje = encodeURIComponent(`Hola, quisiera pedir: ${platilloSeleccionado}`);
    const url = `https://wa.me/526645179580?text=${mensaje}`;
    window.open(url, '_blank');
    cerrarModal();
}

// Modal de Ubicación
function abrirUbicacion() {
    document.getElementById('modal-ubicacion').style.display = 'flex';
}

function cerrarUbicacion() {
    document.getElementById('modal-ubicacion').style.display = 'none';
}

// Cerrar modales al hacer clic afuera
window.onclick = function(event) {
    const modalPlatillo = document.getElementById('modal-platillo');
    const modalUbicacion = document.getElementById('modal-ubicacion');
    if (event.target === modalPlatillo) {
        modalPlatillo.style.display = 'none';
    }
    if (event.target === modalUbicacion) {
        modalUbicacion.style.display = 'none';
    }
}
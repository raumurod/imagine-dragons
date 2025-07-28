// Galería de imágenes
const fotos = [
    "img/dan-reynolds.jpg",
    "img/bones.jpg",
    "img/sharks.jpg",
    "img/night-visions.jpg"
];
document.getElementById('btn-galeria').onclick = function() {
    const random = fotos[Math.floor(Math.random()*fotos.length)];
    document.getElementById('random-img').innerHTML = `<img src="${random}" alt="Imagine Dragons random">`;
};

// Suscripción simulada
document.getElementById('form-suscripcion').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('mensaje-suscripcion').textContent = "¡Gracias por suscribirte!";
    this.reset();
    setTimeout(() => {
        document.getElementById('mensaje-suscripcion').textContent = "";
    }, 2200);
});

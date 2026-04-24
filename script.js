// MOTOR DE WHATSAPP
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'orderForm') {
        e.preventDefault(); 
        const nombre = document.getElementById('nombre').value;
        const cantidad = document.getElementById('cantidad').value;
        const direccion = document.getElementById('direccion').value;
        const miTelefono = "525669188409"; 
        
        const mensaje = `*NUEVO PEDIDO KUKULCAO* 🟤%0A%0A` +
                        `*Nombre:* ${nombre}%0A` +
                        `*Pedido:* ${cantidad}%0A` +
                        `*Dirección:* ${direccion}%0A%0A` +
                        `_Enviado desde el sitio web_`;
        
        const url = `https://wa.me/${miTelefono}?text=${mensaje}`;
        window.open(url, '_blank');
    }
});

// ANIMACIONES AL HACER SCROLL
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remueve la clase para que se anime de nuevo
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach(el => observer.observe(el));
});

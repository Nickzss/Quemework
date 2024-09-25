document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const imagenes = producto.querySelectorAll('.mini-galeria img');
        let currentIndex = 0;

        // Crear botones de navegación
        const prevBtn = document.createElement('a');
        prevBtn.href = '#';
        prevBtn.className = 'nav-btn prev';
        prevBtn.textContent = '←';

        const nextBtn = document.createElement('a');
        nextBtn.href = '#';
        nextBtn.className = 'nav-btn next';
        nextBtn.textContent = '→';

        producto.querySelector('.producto-imagenes').appendChild(prevBtn);
        producto.querySelector('.producto-imagenes').appendChild(nextBtn);

        // Función para mostrar la imagen actual
        function showImage(index) {
            imagenes.forEach(img => img.classList.remove('active'));
            imagenes[index].classList.add('active');
        }

        // Evento para el botón anterior
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
            showImage(currentIndex);
        });

        // Evento para el botón siguiente
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % imagenes.length;
            showImage(currentIndex);
        });

        // Mostrar la primera imagen al cargar
        showImage(currentIndex);
    });
});

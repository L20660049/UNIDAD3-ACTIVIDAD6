function cambiarImagen() {
    // Obtiene el elemento de imagen por su id "imagen"
    var imagen = document.getElementById("imagen");

    // Verifica si el atributo 'src' de la imagen contiene "imagen1.jpg"
    if (imagen.src.includes("imagen1.jpg")) {
        // Si es así, cambia la imagen a "imagen2.jpg"
        imagen.src = "imagen2.jpg";
    } else {
        // Si no, cambia la imagen de vuelta a "imagen1.jpg"
        imagen.src = "imagen1.jpg";
    }
}

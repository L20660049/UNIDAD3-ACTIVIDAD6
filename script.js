function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    if (imagen.src.includes("imagen1.jpg")) {
        imagen.src = "imagen2.jpg";
    } else {
        imagen.src = "imagen1.jpg";
    }
}

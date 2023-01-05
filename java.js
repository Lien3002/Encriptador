function copiarTexto() {
    // Seleccionamos el contenido de la textarea
    document.getElementById("mi-textarea").select();
    // Copiamos el contenido seleccionado al portapapeles
    document.execCommand("copy");
    // Mostramos un mensaje al usuario
    alert("Texto copiado al portapapeles");
  }
  
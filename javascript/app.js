
// Realizar una solicitud AJAX para obtener los datos de la base de datos MySQL
var solicitud = new XMLHttpRequest();
solicitud.open("GET", "obtener_datos.php");
solicitud.send();
solicitud.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Procesar los datos recibidos de la solicitud AJAX
        var datos = JSON.parse(this.responseText);
        for (var i = 0; i < datos.length; i++) {
            // Crear una tarjeta de Bootstrap para cada fila de datos
            var tarjeta = document.createElement("div");
            tarjeta.classList.add("card");
            var encabezado = document.createElement("div");
            encabezado.classList.add("card-header");
            encabezado.innerText = datos[i].nombre;
            var cuerpo = document.createElement("div");
            cuerpo.classList.add("card-body");
            var descripcion = document.createElement("p");
            descripcion.classList.add("card-text");
            descripcion.innerText = datos[i].descripcion;
            var precio = document.createElement("p");
            precio.classList.add("card-text");
            precio.innerText = datos[i].precio;
            cuerpo.appendChild(descripcion);
            cuerpo.appendChild(precio);
            tarjeta.appendChild(encabezado);
            tarjeta.appendChild(cuerpo);
            // Agregar la tarjeta de Bootstrap al documento HTML
            document.getElementById("tarjetas").appendChild(tarjeta);
        }
    }
}
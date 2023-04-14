<?php
// Conexión a la base de datos MySQL
$conn = mysqli_connect("localhost", "root", "", "enfilms");

// Consulta de ejemplo para obtener información de una tabla llamada "productos"
$resultado = mysqli_query($conn, "SELECT * FROM movie");
    if (mysqli_num_rows($resultado) > 0) {
    // Crear un array para almacenar los resultados
    $resultados_array = array();
  
    // Recorrer los resultados y agregarlos al array
    while ($fila = mysqli_fetch_assoc($resultado)) {
      $resultados_array[] = $fila;
    }
  
    // Devolver los resultados en formato JSON
    header('Content-type: application/json');
    echo json_encode($resultados_array);
    http_response_code(200);
  } else {
    // Si no hubo resultados, devolver un mensaje de error en JSON
    header('Content-type: application/json');
    echo json_encode(array('mensaje' => 'No se encontraron resultados'));
    http_response_code(405);
    //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

// Cierre de la conexión a la base de datos MySQL
mysqli_close($conn);
?>

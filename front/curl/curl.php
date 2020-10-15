<?php
// abrimos la sesión cURL

// $data = $_POST[0];
$data2 = "sala2 php";
// $data_array = array('title' => "$data");

$ch = curl_init();

// definimos la URL a la que hacemos la petición
curl_setopt($ch, CURLOPT_URL,"https://webexapis.com/v1/rooms");
// indicamos el tipo de petición: POST
curl_setopt($ch, CURLOPT_POST, TRUE);
// definimos cada uno de los parámetros
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: Bearer OTY5MzgyMTktODI3Yy00N2Y3LWE3OWEtN2ZmZjY0ODdkZGI5ZThlZjM5NDQtMDg1_PF84_consumer', 'Content-Type: application/json'));

curl_setopt($ch, CURLOPT_POSTFIELDS, "title=$data2");

// recibimos la respuesta y la guardamos en una variable
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$remote_server_output = curl_exec ($ch);

// cerramos la sesión cURL
curl_close ($ch);

// hacemos lo que queramos con los datos recibidos
// por ejemplo, los mostramos
print_r($remote_server_output);
?>

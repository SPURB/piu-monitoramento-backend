<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");

if(isset($_GET["data"])){
	include 'classes/Getter.php';
	$data = $_GET["data"];
	$response = new Getter($data);
	echo $response->getRoute($data);
}
else {
	$monitoramento = json_decode(file_get_contents("./output/monitoramento.json")); 
	$hiperlinks = json_decode(file_get_contents("./output/hiperlinks.json")); 
	$out = new stdClass();
	$out->monitoramento = $monitoramento;
	$out->hiperlinks = $hiperlinks;
	echo json_encode($out);
}

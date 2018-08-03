<?php
$monitoramento = json_decode(file_get_contents("output/monitoramento.json")); 
$hiperlinks = json_decode(file_get_contents("output/hiperlinks.json")); 

$out = new stdClass();
$out->monitoramento = $monitoramento;
$out->hiperlinks = $hiperlinks;


header("Content-type: application/json");
echo json_encode($out);
?>
<?php
$out = json_decode(file_get_contents("output/monitoramento.json")); 

header("Content-type: application/json");
echo json_encode($out);
?>
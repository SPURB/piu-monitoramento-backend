<?php
class Getter{
	public function getRoute($d){
		$out = new stdClass();
		switch ($d) {
			case 'hiperlinks': $out = json_decode(file_get_contents("./output/hiperlinks.json")); break;
			case 'monitoramento': $out = json_decode(file_get_contents("./output/monitoramento.json")); break;
			default: $out = 'recurso não encontrado'; break;
		}
		return json_encode($out);
	}
}

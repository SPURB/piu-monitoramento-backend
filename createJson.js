var fs = require('fs');
var XLSX = require('xlsx');
var monitoramento = [];

function createJsFromExcel(inputExcel, tableName, outputJS){
	var worksheet = XLSX.readFile(inputExcel).Sheets[tableName];
	var myObj = XLSX.utils.sheet_to_json(worksheet,{raw:true});

	myObj.map(function(index){ 
		monitoramento.push(index); 
	})
	var json = JSON.stringify(monitoramento);

	var filePath = outputJS +'.json';
	fs.writeFile( filePath, json, 'utf8', function (err){
		if(err){
			console.log(err);
		}
	});
	console.log(filePath + ' atualizado')
}

createJsFromExcel('input/dadosexcel.xlsx','COMUNICACAO', 'output/monitoramento');
createJsFromExcel('input/PIU_Documentacao.xlsx','hiperlinks', 'output/hiperlinks');
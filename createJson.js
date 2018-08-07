var fs = require('fs');
var XLSX = require('xlsx');

function createJsFromExcel(inputExcel, tableName, outputJS){
	var worksheet = XLSX.readFile(inputExcel).Sheets[tableName];
	var rows = XLSX.utils.sheet_to_json(worksheet,{raw:true}); //toda planilha
	outputJson = [];

	rows.map(function(rowLine){ // para cada linha
		var collection = Object.entries(rowLine); 
		var output = {}

		collection.map(function(index) {
			if(index[1] != ''){ //se não tiver dados não inclui no json final
				output[index[0]] = index[1];
			}
		});
		outputJson.push(output);
	})

	var json = JSON.stringify(outputJson);

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
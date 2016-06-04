var fs = require('fs');
//console.log(fs.readFileSync('./cmudict.txt'));
//console.log(fs);

function createHaiku(structureArray, indexSyllableArray){
	var words = "";
	for(var i=0; i < structureArray.length; i++){
		var random = Math.floor(Math.random() * indexSyllableArray[structureArray[i] -1].length)
		words += indexSyllableArray[structureArray[i]-1][random] + "\n";
	}
	return words;

}

module.exports = {
		createHaiku: createHaiku,
};

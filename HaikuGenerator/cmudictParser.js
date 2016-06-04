var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data, wordArr, phonemeArr){    
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){    
    lineSplit = line.split("  ");
    wordArr.push(lineSplit[0]);
    phonemeArr.push(lineSplit[1]);    
    //console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]); 

  });   
}

//formatData(cmudictFile);

module.exports = {
	readCmudictFile: readCmudictFile,
	formatData: formatData,
	file: cmudictFile
}
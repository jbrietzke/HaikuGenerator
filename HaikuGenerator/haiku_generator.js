var haiku = require('./haiku');
var text = require('./cmudictParser');
var entry = [5,7,5];
var wordArray = [];
var phonemeArray = [];
var syllablesArray = [];
var indexSyllableArray = [[],[],[],[],[],[],[]];
//haiku.createHaiku(entry);
//var dataString = text.readCmudictFile(text.file);
text.formatData(text.file, wordArray, phonemeArray);
syllCount(phonemeArray);
syllArr(syllablesArray);

console.log(haiku.createHaiku(entry, indexSyllableArray));


function syllArr(syllablesArray){
	for(var i=0; i < syllablesArray.length; i++){
		switch(syllablesArray[i]){
			case 1: 
				indexSyllableArray[0].push(wordArray[i]);
				break;
			case 2:
				indexSyllableArray[1].push(wordArray[i]);
				break;
			case 3:
				indexSyllableArray[2].push(wordArray[i]);
				break;
			case 4:
				indexSyllableArray[3].push(wordArray[i]);
				break;
			case 5:
				indexSyllableArray[4].push(wordArray[i]);
				break;
			case 6:
				indexSyllableArray[5].push(wordArray[i]);
				break;
			case 7:
				indexSyllableArray[6].push(wordArray[i]);
				break;
		}
	}
}

function syllCount(phonemeArray){
    var sylls = [];
    for (i = 0, x = phonemeArray.length; i < x; i++){
    	if (phonemeArray[i] !== undefined) {
    		if(phonemeArray[i].match(/\d/g) !== null){
    			sylls = phonemeArray[i].match(/\d/g);
        		syllablesArray.push(sylls.length);
    		}else{
    			syllablesArray.push(0);
    		}
    	}else{
    		syllablesArray.push(0);
    	}
    }
}

function createHaiku(structure, syllabelsArr){
  var arrOfWords;
  return structure.map(function(lines){
    return lines.map(function(syls){
      arrOfWords = syllabelsArr[syls];
      return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
    }).join(' ');
  }).join('\n');
}
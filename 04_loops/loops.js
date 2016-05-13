function repeat(wordToRepeat, repeatNumber){
	var repeatedWord = "";
	for(var i = 0; i < repeatNumber; i++){
		repeatedWord += wordToRepeat;
	}
	return repeatedWord;
}

function sum(arrayOfNumbers){
	var sumOfArray = 0;
	for(var i = 0; i < arrayOfNumbers.length; i++){
		sumOfArray += arrayOfNumbers[i];
	}
	return sumOfArray;
}

function gridGenerator(numberOfRows){
	var gridDesign = "";
	for(var i = 1; i <= numberOfRows; i++){
		for( var j = 1; j <= numberOfRows; j++){
			if((i+j) % 2 === 0){
				gridDesign += "#";
			} else{
				gridDesign += " ";
			}
		}
		gridDesign += "\n";
	}
	return gridDesign;
}

function join(characterArray, separatorCharacter){
	var combinedWord = "";
	for(var i = 0; i < characterArray.length; i++){
		for(var j = 0; j < characterArray[i].length; j++){
			combinedWord += characterArray[i][j]
		}
		if((separatorCharacter != undefined) && (i+1 != characterArray.length)){
			combinedWord += separatorCharacter;
		}
	}
	return combinedWord;
}

function paramify(passedObject){
	var listOfKeysInObject = [];
	var counter = 0; 
	for(var key in passedObject){
		if(Object.prototype.hasOwnProperty.call(passedObject, key)){
			listOfKeysInObject[counter] = key + "=" + passedObject[key];
			counter++;
		} 
	}
	if(counter == 0){
		listOfKeysInObject = ''; 
	}else if(listOfKeysInObject[0][0] != 'f'){
		listOfKeysInObject = listOfKeysInObject.join('&');
	}else{
		listOfKeysInObject = listOfKeysInObject.reverse().join('&');
	}
	return listOfKeysInObject;
}

















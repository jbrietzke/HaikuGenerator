// 06_Functional 
function doubler(num){
	return num*2;
}

function map(array, mappingFunc){
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		array[i] = mappingFunc(array[i]);
		newArr.push(array[i])
	}
	return newArr;
}

function filter(array, filterFunc){
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (filterFunc(array[i]) === true) {
			newArr.push(array[i]);
		}
	}
	return newArr;
}

function contains(collection, comparedValue){
	var response = false;
	for(var i=0; i< collection.length; i++){
		if(comparedValue === collection[i]){
			response = true;
		}
	}
	for(var key in collection){
		if (collection[key] === comparedValue) {
			response = true;
		}
	}
	return response;
}

function countWords(sentenceToCount){
	var oneWord = "";
	var newArr = [];
	for (var i = 0; i < sentenceToCount.length; i++) {
		if (sentenceToCount[i] !== " ") {
			oneWord += sentenceToCount[i];
		}else{
			newArr.push(oneWord);
			oneWord = "";
		}
	}
	return newArr.length + 1;
}

function reduce(array, startingValue, reducingFunc){
	var currentValue = startingValue;
	for (var i = 0; i < array.length; i++) {
		currentValue = reducingFunc(currentValue, array[i]);
	}
	return currentValue;
}

function countWordsInReduce(currentVal, stringOfWords){
	for(var i=0; i < stringOfWords.length; i++){
		if (stringOfWords[i] === " ") {
			currentVal++;
		}
	}
	return currentVal + 1;
}

function sum(array){
	var total = reduce(array, 0, function(current, next){
		return current += next;
	});
	return total;
}

function every(array, everyFunc){
	var response = true;
	for (var i = 0; i < array.length; i++) {
		if (everyFunc(array[i]) === false) {
			response = false;
		}
	}
	return response;
}

function any(array, anyFunc){
	var response = false;
	for (var i = 0; i < array.length; i++) {
		if (anyFunc(array[i]) === true) {
			response = true;
		}
	}
	return response;
}











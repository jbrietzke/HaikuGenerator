// Functions.js
function concatString(){
	var newArr = Array.prototype.slice.call(arguments);
	var newArr = newArr.join('');
	return newArr;
}

function yourFunctionRunner(){
	var newArr = Array.prototype.slice.call(arguments);
	for(var i = 0; i < newArr.length; i++){
		newArr[i] = newArr[i]();
	}
	newArr = newArr.join('');
	return newArr;
}

function makeAdder(A){
	return function(x){
		return x+A;
	}
}

function once(functionToChange){
	var counter = 0;
	var newFunction = function(){
		if(counter === 0){
			functionToChange();
			counter++;
		}
	}
	return newFunction;
}

function createObjectWithClosures(){
	var originalValue = 0;
	var myObject = {
		oneIncrementer: function(){
			return originalValue += 1;
		},
		tensIncrementer: function(){
			return originalValue += 10;
		},
		getValue: function(){
			return originalValue;
		}
	}
	return myObject;
}
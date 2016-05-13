function createCalculator(){
	var calculatorObj = {
		currentValue : 0,
		value : findValue,
		add : addNumber,
		subtract : subtractNumber
	};
	return calculatorObj;
}

function findValue(){
	return this.currentValue;
}

function addNumber(newNumber){
	this.currentValue += newNumber;
}

function subtractNumber(newNumber){
	this.currentValue -= newNumber;
}
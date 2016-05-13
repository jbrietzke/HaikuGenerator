function RPNCalculator(){
	this.arrayObj = [];
}

RPNCalculator.prototype.plus = function(){
	if (this.arrayObj.length < 2) {
		throw "rpnCalculator is empty";
	}
	this.arrayObj.unshift(this.arrayObj.shift() + this.arrayObj.shift());
}

RPNCalculator.prototype.value = function(){
	return this.arrayObj[0];
}

RPNCalculator.prototype.push = function(newNumber){
	this.arrayObj.unshift(newNumber);
}

RPNCalculator.prototype.minus = function(newNumber){
	if(this.arrayObj.length < 2){
		throw "rpnCalculator is empty";
	}
	this.arrayObj.unshift(this.arrayObj.splice(1,1) - this.arrayObj.shift());
}

RPNCalculator.prototype.divide = function(newNumber){
	if(this.arrayObj.length < 2){
		throw "rpnCalculator is empty";
	}
	this.arrayObj.unshift(this.arrayObj.splice(1,1) / this.arrayObj.shift());
}

RPNCalculator.prototype.times = function(newNumber){
	if(this.arrayObj.length < 2){
		throw "rpnCalculator is empty";
	}
	this.arrayObj.unshift(this.arrayObj.shift() * this.arrayObj.shift());
}

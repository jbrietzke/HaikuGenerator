function setPropertiesOnObjLiteral(obj){
	obj.x = 7;
	obj.y = 8;
	obj.onePlus = function(x){
		return (x+1);
	};
	console.log(obj);
}

function setPropertiesOnArrayObj(obj){
	debugger;
	obj.hello = function() {
		return "Hello!";
	};
	obj.full = "stack";
	obj.push(5);
	obj.twoTimes = function(num){
		return (num*2);
	};
}

function setPropertiesOnFunctionObj(obj){
	obj.year = 2016;
	obj.divideByTwo = function(num){
		return (num/2);
	};
	obj.prototype.helloWorld = function(){
		return "Hello World";
	};
	console.log(obj);
}
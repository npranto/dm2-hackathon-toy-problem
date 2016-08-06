'use strict';

function splitAny(param) {
	
	let errorType = "object";
	if(typeof param === 'boolean'){
		errorType = 'boolean';
	}else if(typeof param === 'undefined'){
		errorType = 'undefined';
	}
	if (!param) {
		throw new TypeError(`Expected an array, string, object, number, or function, instead got ${errorType} ${param}`);
	}


	if(Array.isArray(param)){
		let arrayReturn = param;

		for(let i=0; i< arrayReturn.length; i++){
			if (isNaN(arrayReturn[i])) {
				for(let i=0; i< arrayReturn.length; i++){
					arrayReturn[i] = splitAny(arrayReturn[i]);
				}
				return arrayReturn;
			}
		}
	}

	if(Array.isArray(param)){
		console.log("true");
		let arrayOfArray = param;
		let arrayReturn = [];
		for(let i=0; i<arrayOfArray.length; i++){
			arrayReturn.push([arrayOfArray[i]]);
		}
		return arrayReturn;
	}


	if(typeof param === 'function'){
		console.log(true);
		let result = param() + "";
		result = result.split('');
		for (var i = 0; i < result.length; i++) {
			if(!isNaN(parseInt(result[i]))){
				result[i] = parseInt(result[i]);
			}
		}
		return result;
	}

	if(typeof param === "number"){
		let paramToArr = param.toString().split('');
		for (var i = 0; i < paramToArr.length; i++) {
			if(!isNaN(parseInt(paramToArr[i]))){
				paramToArr[i] = parseInt(paramToArr[i]);
			}
			
		}
		return paramToArr;
	}

	if (typeof param === 'string'){
		let str = param;
		
		if(str.indexOf(' ') === -1){
			let paramToArr = str.split('');
			return paramToArr;
		}else{
			let multipleStringsArray = str.split(' ');
			console.log(multipleStringsArray);
			for(let i=0; i<multipleStringsArray.length; i++){
				multipleStringsArray[i] = multipleStringsArray[i].split('');			
			}
			return multipleStringsArray;
			
		}
	}

	if(typeof param === 'object'){
		let obj = param;
		let objArray = [];
		for(let prop in obj){
			objArray.push([prop, obj[prop]]);
		}
		return objArray;
	}
}
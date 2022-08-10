"use strict";

class HashStorageFunc {

	constructor() {
	this.bar_={};
	}

	addValue = function(key, value) {

		
		this.bar_[key]=value;
		

	}

	getValue = function(key) {

		if (key in this.bar_){
		return this.bar_[key];
		}
		return "Нет такого!";
	}


	deleteValue  = function(key) {

		if(key in this.bar_){
		
		delete this.bar_[key] ;
		return true;
		
		}else{
			return false;
			
		}
	}

	getKeys  = function() {

		return Object.keys(this.bar_);

		
	}
	
}


var drinkStorage = new HashStorageFunc();


function butAddValue() {

	let key = prompt('Введите название напитка:');
	
	let value={};

			
	if(key !==null){

		let alco=confirm('Он алкогольный?')? "Алгокольный" : "Не алкогольный";
		let receipt=prompt('Введите ингридиенты напитка:');
		value = {alco , receipt};
 	}

 	 	drinkStorage.addValue(key, value);

	 alert('Напиток "'+key+'" добавлен в базу');

 } 

function butGetValue(){

	let key=prompt('Введите название напитка:');
	console.log('Информация о напитке "'+key+'" :');
	console.log(drinkStorage.getValue(key));



}	

function butDeleteValue(){

	let key=prompt('Введите название напитка:');
	console.log(drinkStorage.deleteValue(key));




}

function butGetKeys(){

	
	console.log(drinkStorage.getKeys());


}
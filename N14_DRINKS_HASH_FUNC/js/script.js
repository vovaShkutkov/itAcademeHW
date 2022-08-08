"use strict";

class HashStorageFunc {

	constructor() {
		
		this.bar_={};
	}

	
	addValue (key, value) {
		
		this.bar_[key]=value;
		alert('Напиток "'+key+'" добавлен в базу');

	}

	getValue (key) {

		console.log('Выбранный напиток "'+key+'" :');
		console.log(this.bar_[key]);
	}


	deleteValue(key) {

		if(key in this.bar_){
			delete this.bar_[key] ;
			console.log(true);
			alert('Выбранный напиток "'+key+'" удален');
		}else{
			console.log(false);
			alert('Такого напитка нет в базе')
		}
	}

	getKeys() {

		var drinks=[];

		for (this.drinkName in this.bar_){
			
			drinks.push(this.drinkName);
		}

		document.getElementById("coctails").innerHTML=drinks;
		console.log(drinks);
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

 } 

function butGetValue(){

	let key=prompt('Введите название напитка:');
	drinkStorage.getValue(key);

}	

function butDeleteValue(){

	let key=prompt('Введите название напитка:');
	drinkStorage.deleteValue(key);

}

function butGetKeys(){
	
	drinkStorage.getKeys();

}
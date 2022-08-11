"use strict";

function HashStorageFunc() {

	this.bar_={};

	this.addValue = function(key, value) {

			this.bar_[key]=value;
	
	}

	this.getValue = function(key) {

			return this.bar_[key];
	
	}


	this.deleteValue  = function(key) {

		if(key in this.bar_){
		
		delete this.bar_[key] ;
		return true;
		
		}else{
			return false;
			
		}
	}

	this.getKeys  = function() {
		return Object.keys(this.bar_);
		
	}
	
}


var drinkStorage = new HashStorageFunc();


function butAddValue() {

	let key = prompt('Введите название напитка:');
	
	let value={};
	
	if(key !==null){

		let alco=confirm('Он алкогольный?')? "Алгокольный!" : "Не алкогольный.";
		let receipt=prompt('Введите ингридиенты напитка:');
		value = {alco , receipt};
 	}

 	 	drinkStorage.addValue(key, value);

	 alert('Напиток "'+key+'" добавлен в базу');

 } 

function butGetValue(){

	let key=prompt('Введите название напитка:');
		
		drinkStorage.getValue(key);

	var	drinkName = drinkStorage.getValue(key);

	if ( drinkName === undefined){
		alert("Такого напитка нет" );
	}else{
		alert('Напиток '+drinkName.alco+'\n'+'Состоит из : '+drinkName.receipt+'.');
	};

}	

function butDeleteValue(){

	let key=prompt('Введите название напитка:');
	alert(
		(drinkStorage.deleteValue(key))? "Напиток "+key+ " удален" : "Такого напитка нет" );

}

function butGetKeys(){
	alert(drinkStorage.getKeys());
}
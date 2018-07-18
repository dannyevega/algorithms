/*
A map is a data structure that stores data in key / value pairs where every key is unique. A map is sometimes called an associative array or dictionary. It is often used for fast look-ups of data. Maps allow the following things:

the addition of a pair to the collection
the removal of a pair from the collection
the modification of an existing pair
the lookup of a value associated with a particular key
*/

// Creating Map data structure
function Map(){
	this.collection = {};
	this.count = 0;
}

Map.prototype.size = function(){
	return this.count;
}

Map.prototype.set = function(key, value){
	this.collection[key] = value;
	this.count++;
}

Map.prototype.has = function(key){
	return (key in this.collection);
}

Map.prototype.get = function(key){
	return (key in this.collection) ? this.collection[key] : null;
}

Map.prototype.delete = function(key){
	if(key in this.collection){
		delete this.collection[key];
		this.count--;
	}


Map.prototype.clear = function(key){
	this.collection = {};
	this.count = 0;
}

Map.prototype.values = function(key){
	var result = new Array();
	for (var key of Object.keys(this.collection)) {
		result.push(this.collection[key]);
	};
	return (result.length > 0) ? result : null;
}


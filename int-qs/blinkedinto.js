// 1. Explain Event Bubbling

var Foo = function(a){
	function bar(){
		return a;
	}

	this.baz = function(){
		return a;
	}
}

Foo.prototype.biz = function(){
	return a;
}

var f = new Foo(7);

// What will these calls return?
f.bar(); // Uncaught TypeError: f.bar is not a function
f.baz(); // 7
f.biz(); // Uncaught ReferenceError: a is not defined

// Now, make all calls above return 7
var Foo = function(a){
	this.a = a;
	this.bar = function(){
		return this.a;
    }
	this.baz = function(){
		return this.a;
	}
}

Foo.prototype.biz = function(){
	return this.a;
}

// Built a small UI component // https://imgur.com/wmnmXsX

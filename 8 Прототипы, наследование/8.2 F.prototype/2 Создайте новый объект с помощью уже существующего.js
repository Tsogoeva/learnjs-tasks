function Obj(item) {
	this.item = item;
}

let obj = new Obj('thing');
let anotherObj = new obj.constructor('anotherThing');

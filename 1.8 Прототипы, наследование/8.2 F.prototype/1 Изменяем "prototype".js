function Rabbit() { }
Rabbit.prototype = {
	eats: true
};

let rabbit1 = new Rabbit();

Rabbit.prototype = {};

alert(rabbit1.eats); // true

//

function Rabbit() { }
Rabbit.prototype = {
	eats: true
};

let rabbit2 = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit2.eats); // false

//

function Rabbit() { }
Rabbit.prototype = {
	eats: true
};

let rabbit3 = new Rabbit();

delete rabbit3.eats;

alert(rabbit3.eats); // true

//

function Rabbit() { }
Rabbit.prototype = {
	eats: true
};

let rabbit4 = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit4.eats); // undefined

let map = new Map();

map.set("name", "John");

let keys = Object.keys(Object.fromEntries(map));

keys.push("more");

let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user);
let sameUser = JSON.parse(json);

let dateOfReading = new WeakMap();

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

dateOfReading.set(messages[0], new Date());
dateOfReading.set(messages[1], new Date());
dateOfReading.set(messages[2], new Date());

dateOfReading.delete(messages[0]);
dateOfReading.delete(messages[1]);
dateOfReading.delete(messages[2]);

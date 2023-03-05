let readSet = new WeakSet();

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

for (let message of messages) {
    readSet.add(message);
}

if (readSet.has(messages[0])) {
    readSet.delete(messages[0]);
}

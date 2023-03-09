// Запустится
button.addEventListener("click", () => alert("1"));

// Предыдущее событие не будет удалено
button.removeEventListener("click", () => alert("1"));

// Запустится
button.onclick = () => alert(2);

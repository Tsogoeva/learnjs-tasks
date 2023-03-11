let form = document.forms.calculator;

const interestElem = form.interest;
const yearsElem = form.months;
const depositElem = form.money;

interestElem.addEventListener("input", calculateMoney);

depositElem.addEventListener("input", calculateMoney);

yearsElem.addEventListener("change", calculateMoney);

function calculateMoney() {
	const diagramAfter = diagram.querySelector("#height-after");
	const moneyAfter = diagram.querySelector("#money-after");
	const moneyBefore = diagram.querySelector("#money-before");

	const deposit = depositElem.value;
	const years = yearsElem.value / 12;
	const interest = interestElem.value * 0.01;

	const result = Math.round(deposit * (1 + interest) ** years);

	diagramAfter.style.height = result / deposit * 100 + "px";
	moneyAfter.innerHTML = result;
	moneyBefore.innerHTML = deposit;
}

calculateMoney();

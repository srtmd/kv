
const balanceAmount = document.querySelector(".nav__list-item-balance-amount");
const depositInput = document.querySelector("#amount");
const depositButton = document.querySelector(".main-dep__middle-deposit");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const nigga = "999999"
const leoreis = "6000"
const q500 = "500"

balanceAmount.textContent = localStorage.getItem("Balance");
balanceAmountMobile.textContent = localStorage.getItem("Balance")

const addBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let inputValue = parseFloat(depositInput.value);
	let value = amountValue + inputValue;

	balanceAmount.textContent = value.toFixed(2);
	balanceAmountMobile.textContent = value.toFixed(2);
	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	depositInput.value = ""
};

const addBalance2 = () => {
	if (balanceAmount.textContent == "LEOREIS"){
		let value = amountValue + leoreis;
		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
		depositInput.value = ""
	}
	else if (balanceAmount.textContent == "500conto"){
		let value = amountValue + q500;
		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
		depositInput.value = ""
	}
	else if (balanceAmount.textContent == "nigga"){
		let value = amountValue + nigga;
		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
		depositInput.value = ""
	}
	else{
		let value = amountValue;
		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
		depositInput.value = ""
	}
};

depositButton.addEventListener("click", addBalance2);

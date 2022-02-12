// common function for input
function input(inputId) {
  const getInput = document.getElementById(inputId);
  const inputValue = getInput.value;
  const inputNumber = Number(inputValue);
  getInput.value = "";
  if (inputNumber == "string") {
    alert("please insert a number");
  } else {
    return inputNumber;
  }
}
// common output function
function result(amount, inputAmount) {
  const amountId = document.getElementById(amount);
  const amountValue = amountId.innerText;
  const amountNumber = Number(amountValue);
  const finalamount = (amountId.innerText = amountNumber + inputAmount);
  return finalamount;
}
// common balance update function
function updateBalance(inputAmount, isAdd) {
  const getBalance = document.getElementById("balance-amount");
  const balanceValue = getBalance.innerText;

  if (isAdd == true) {
    return (getBalance.innerText = Number(balanceValue) + inputAmount);
  } else {
    return (getBalance.innerText = Number(balanceValue) - inputAmount);
  }
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const inputAmount = input("floatingInputDeposit");
  result("deposit-amount", inputAmount);
  updateBalance(inputAmount, true);
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const inputAmount = input("floatingInputWithdraw");
  result("withdraw-amount", inputAmount);
  updateBalance(inputAmount, false);
});

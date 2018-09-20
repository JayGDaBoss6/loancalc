let loanAmount = document.querySelector("#loanAmount");
let annualInterest = document.querySelector("#annualInterest");
let repaymentYears = document.querySelector("#repaymentYears");
let calculateBtn = document.querySelector("#calculateBtn");
let monthlyPaymentOutput = document.querySelector("#monthlyPaymentOutput");
let totalPaymentOutput = document.querySelector("#totalPaymentOutput");
let totalInterestOutput = document.querySelector("#totalInterestOutput");

loanAmount.addEventListener("keyup", formatCheck);
annualInterest.addEventListener("keyup", formatCheck);
repaymentYears.addEventListener("keyup", formatCheck);
calculateBtn.addEventListener("click", calculate);

function formatCheck(e){
 if(isNaN(e.target.value)){
    e.target.classList.add("bg-danger")
 }
 else{
    e.target.classList.remove("bg-danger")

 }
};


function calculate() {
    if(loanAmount.classList.contains('bg-danger') || annualInterest.classList.contains('bg-danger') ||repaymentYears.classList.contains('bg-danger') ){alert("You need to fix the errors first.")}
    else{
 let monthlyPayment = finance.calculatePayment(
  loanAmount.value,
  repaymentYears.value * 12,
  annualInterest.value
 );
 let totalPayment = finance.calculateAmount(
  repaymentYears.value * 12,
  annualInterest.value,
  monthlyPayment
 );
 let totalInterest = finance.calculateAccruedInterest(
  loanAmount.value,
  repaymentYears.value * 12,
  annualInterest.value
 );

 monthlyPaymentOutput.value = finance.format(monthlyPayment, "USD");
 totalPaymentOutput.value = finance.format(totalPayment, "USD");
 totalInterestOutput.value = finance.format(totalInterest, "USD");


}}

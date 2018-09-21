let loanAmount = document.querySelector("#loanAmount");
let annualInterest = document.querySelector("#annualInterest");
let repaymentYears = document.querySelector("#repaymentYears");
let calculateBtn = document.querySelector("#calculateBtn");
let monthlyPaymentOutput = document.querySelector("#monthlyPaymentOutput");
let totalPaymentOutput = document.querySelector("#totalPaymentOutput");
let totalInterestOutput = document.querySelector("#totalInterestOutput");
let gif = document.querySelector("#gif");
let calculated = document.querySelector("#calculated");


loanAmount.addEventListener("keyup", formatCheck);
annualInterest.addEventListener("keyup", formatCheck);
repaymentYears.addEventListener("keyup", formatCheck);
calculateBtn.addEventListener("click", calculate);

function formatCheck(e) {
    if (isNaN(e.target.value)) {
        e.target.classList.add("bg-danger")
    }
    else {
        e.target.classList.remove("bg-danger")

    }
};

function showCalc() {
    gif.classList.add("d-none");
    calculated.classList.remove("d-none");
}

function calculate() {
    if (loanAmount.classList.contains('bg-danger') || annualInterest.classList.contains('bg-danger') || repaymentYears.classList.contains('bg-danger')) { alert("You need to fix the errors first.") }
    else {
        calculated.classList.add("d-none");
        gif.classList.remove("d-none");
        setTimeout(showCalc, "3000");
        const principal = parseFloat(loanAmount.value);
        const calculatedInterest = parseFloat(annualInterest.value) / 100 / 12;
        console.log(calculatedInterest);

        const calculatedPayments = parseFloat(repaymentYears.value) * 12;

        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);


        monthlyPaymentOutput.value = monthly.toFixed(2);
        totalPaymentOutput.value = (monthly * calculatedPayments).toFixed(2);
        totalInterestOutput.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    }
}
// OLD BROKEN ALGORITHM
//  let monthlyPayment = finance.calculatePayment(
//   loanAmount.value,
//   repaymentYears.value * 12,
//   annualInterest.value
//  );

//  let totalInterest = finance.calculateAccruedInterest(
//   loanAmount.value,
//   repaymentYears.value * 12,
//   annualInterest.value
//  );

//  let totalPayment = parseFloat(loanAmount.value) + totalInterest;


//  monthlyPaymentOutput.value = finance.format(monthlyPayment, "USD");
//  totalPaymentOutput.value = finance.format(totalPayment, "USD");
//  totalInterestOutput.value = finance.format(totalInterest, "USD");
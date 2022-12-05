const bill = document.getElementById("bill");
const numberOfPeople = document.getElementById("numberOfPeople");
const reset = document.getElementById("reset");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("tip-calc-ttal");
const buttons = document.getElementsByClassName("btn");

let percent = 0;

reset.addEventListener("click", () => {
  let totalTip = (percent / 100) * bill.value;
  tipAmount.textContent = totalTip / numberOfPeople.value;

  //dahd
  //   let total = bill.value + tipAmount.textContent;
  //   totalAmount.textContent = total / numberOfPeople.value;
  console.log(totalTip);
});

percentSelector = () => {
  for (const button of buttons) {
    button.addEventListener("click", () => {
      percent += +button.textContent;
      console.log(percent);
    });
  }
};

percentSelector();

// bill +

// 1) SAVE BILL VALUE
// 2) ADD IN AMOUNT FOR TIP %
// 3) SAVE NUMBER OF PEOPLE
// 4) % / 100 * total
// 5) tip amount = tip / no people
// 6) total = bill amount + tip / no of people

// collect value of the bill
// find out what % they want to add on
// find out how many people its split between

// create a function that will store a value
// 0 parameter
// return value ( multiplier percentage) based on button selected

// for (const button of buttons) {
//     button.addEventListener("click", () => {
//       console.log(button);
//     });
//   }

// console.log((buttonPercent / 100) * totalValue);

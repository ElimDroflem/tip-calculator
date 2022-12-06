const bill = document.getElementById("bill");
const buttons = document.getElementsByClassName("btn");
const numberOfPeople = document.getElementById("numberOfPeople");
const calculate = document.getElementById("reset");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("tip-calc-total");

let percent = 0;

calculate.addEventListener("click", () => {
  if (numberOfPeople.value != 0) {
    numberOfPeople.style.color = "hsl(186, 14%, 43%)";
    let totalTip = (percent / 100) * bill.value;
    tipAmount.textContent = totalTip / numberOfPeople.value;
    let addit = +bill.value + totalTip / numberOfPeople.value;
    totalAmount.textContent = addit;
  } else {
    numberOfPeople.style.color = "red";
  }
});

percentSelector = () => {
  for (const button of buttons) {
    button.addEventListener("click", () => {
      if (percent === 0) {
        percent += +button.textContent;
        console.log(percent);
      } else {
        percent = 0;
        percent += +button.textContent;
        console.log(percent);
      }
    });
  }
};

percentSelector();

const input1 = document.querySelector("#number1");
const input2 = document.querySelector("#number2");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const result = document.querySelector(".result");

plus.addEventListener("click", () => {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);
  const sum = number1 + number2;

  if (isNaN(input1.value) || isNaN(input2.value)) {
    result.innerHTML = "Va rugam sa introduceti o valoare numerica";
  } else {
    result.innerHTML = `Rezultatul operatiei este ${sum}`;
  }
});

minus.addEventListener("click", () => {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);
  const division = number1 - number2;
  if (isNaN(input1.value) || isNaN(input2.value)) {
    result.innerHTML = "Va rugam sa introduceti o valoare numerica";
  } else {
    result.innerHTML = `Rezultatul operatiei este ${division}`;
  }
});

divide.addEventListener("click", () => {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);
  const substraction = number1 / number2;

  if (number2 === 0) {
    result.innerHTML = "Nu se poate face impartirea la 0";
  } else {
    if (isNaN(input1.value) || isNaN(input2.value)) {
      result.innerHTML = "Va rugam sa introduceti o valoare numerica";
    } else {
      result.innerHTML = `Rezultatul operatiei este ${substraction}`;
    }
  }
});

multiply.addEventListener("click", () => {
  const number1 = Number(input1.value);
  const number2 = Number(input2.value);
  const multiplication = number1 * number2;
  if (isNaN(input1.value) || isNaN(input2.value)) {
    result.innerHTML = "Va rugam sa introduceti o valoare numerica";
  } else {
    result.innerHTML = `Rezultatul operatiei este ${multiplication}`;
  }
});

input1.addEventListener("input", event => {
  const value = event.target.value;
  if (isNaN(value)) {
    result.innerHTML = "Va rugam sa introduceti o valoare numerica";
  } else {
    result.innerHTML = "";
  }
});

input2.addEventListener("input", event => {
  const value = event.target.value;
  if (isNaN(value)) {
    result.innerHTML = "Va rugam sa introduceti o valoare numerica";
  } else {
    result.innerHTML = "";
  }
});

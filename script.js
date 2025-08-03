let clickSound = document.getElementById("click-sound");
clickSound.volume = 0.3;
let buttons = document.querySelectorAll(".cal-button");

str = "";
//assigning values
let numKey = document.querySelectorAll(".num");
let display = document.querySelector(".display");
let clear = document.querySelector("#c");
let back = document.querySelector("#back");
let zero = document.querySelector("#zero");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let equals = document.querySelector("#equals");
let dot = document.querySelector("#dot");
start = false;
//operator
function Operator(char) {
  return ["+", "-", "/", "*", "."].includes(char);
}
// for sound
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
//to display values
function displaying() {
  display.innerHTML = str;
  if (str == "") {
    str = 0;
    display.innerHTML = str;
    str = "";
  }
}
// for number keys
function numWrk() {
  numKey.forEach((key) => {
    key.addEventListener("click", () => {
      if (start == false) {
        displaying();
      }
      start = true;
      let value = key.textContent;
      if (str.length < 24) {
        str = str + value;
        displaying();
      }
      if (display.innerHTML == 0) {
        display.innerHTML = 0;
        str = "";
      }
    });
  });
}
// for c
clear.addEventListener("click", () => {
  str = "0";
  displaying();
  str = "";
});
// for back
back.addEventListener("click", () => {
  str = str.slice(0, -1);
  displaying();
});
//for add
plus.addEventListener("click", () => {
  if (str.length > 0 && !Operator(str[str.length - 1])) {
    str += "+";
    displaying();
  }
});
//for minus
minus.addEventListener("click", () => {
  if (str.length > 0 && !Operator(str[str.length - 1])) {
    str += "-";
    displaying();
  }
});
//for multiply
multiply.addEventListener("click", () => {
  if (str.length > 0 && !Operator(str[str.length - 1])) {
    str += "*";
    displaying();
  }
});
//for divide
divide.addEventListener("click", () => {
  if (str.length > 0 && !Operator(str[str.length - 1])) {
    str += "/";
    displaying();
  }
});
//dot
dot.addEventListener("click", () => {
  let lastNumber = str.split(/[\+\-\*\/]/).pop();
  if (!lastNumber.includes(".")) {
    str += ".";
    displaying();
  }
});

//equals
equals.addEventListener("click", () => {
  str = str.replace(/&times/g, "*");
  let equal = eval(str);
  str = equal.toString();
  displaying();
});
numWrk();
c();

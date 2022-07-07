const display = document.getElementById("display");
const ac = document.getElementById("ac");
const c = document.getElementById("c");
const equal = document.getElementById("equal");
const pi = document.getElementById("pi");
const module = document.getElementById("module");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const exp = document.getElementById("exp");
const divide = document.getElementById("divide");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const log = document.getElementById("log");
const multi = document.getElementById("multi");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const sqrt = document.getElementById("sqrt");
const minus = document.getElementById("minus");
const pm = document.getElementById("pm");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const square = document.getElementById("square");
const add = document.getElementById("add");
const openParen = document.getElementById("open");
const closeParen = document.getElementById("close");
const cos = document.getElementById("cos");
const sin = document.getElementById("sin");
const tan = document.getElementById("tan");

display.focus();
ac.addEventListener("click", () => {
  display.value = "";
  display.focus();
});
c.addEventListener("click", () => {
  let tempc = display.value;
  display.value = tempc.substring(0, tempc.length - 1);
});
equal.addEventListener("click", () => {
  if (display.value === "") {
    display.value = "";
  } else {
    display.value = eval(display.value);
  }
});
pi.addEventListener("click", () => {
  if (display.value === "") {
    display.value = 3.14159265;
  } else {
    var tempPai = display.value * 3.14159265;
    display.value = tempPai;
  }
});
module.addEventListener("click", () => {
  let tempPercentage = eval(display.value);
  let anpercent = tempPercentage * 100 + "%";
  display.value = anpercent;
});
seven.addEventListener("click", () => {
  display.value += "7";
});
eight.addEventListener("click", () => {
  display.value += "8";
});
nine.addEventListener("click", () => {
  display.value += "9";
});
exp.addEventListener("click", () => {
  display.value = Math.exp(display.value);
});
divide.addEventListener("click", () => {
  display.value += "/";
});
four.addEventListener("click", () => {
  display.value += "4";
});
five.addEventListener("click", () => {
  display.value += "5";
});
six.addEventListener("click", () => {
  display.value += "6";
});
log.addEventListener("click", () => {
  let tempLog = Math.log(display.value);
  display.value = tempLog;
});
multi.addEventListener("click", () => {
  display.value += "*";
});
one.addEventListener("click", () => {
  display.value += "1";
});
two.addEventListener("click", () => {
  display.value += "2";
});
three.addEventListener("click", () => {
  display.value += "3";
});
sqrt.addEventListener("click", () => {
  let tempsqrt = Math.sqrt(display.value);
  display.value = tempsqrt;
});
minus.addEventListener("click", () => {
  display.value += "-";
});
pm.addEventListener("click", () => {
  let tempc = display.value;
  tempc = tempc * -1;
  display.value = tempc;
});
zero.addEventListener("click", () => {
  display.value += "0";
});
decimal.addEventListener("click", () => {
  display.value += ".";
});
square.addEventListener("click", () => {
  let tempSquare = Math.pow(display.value, 2);
  display.value = tempSquare;
});
add.addEventListener("click", () => {
  display.value += "+";
});
openParen.addEventListener("click", () => {
  display.value += "(";
});
closeParen.addEventListener("click", () => {
  display.value += ")";
});
cos.addEventListener("click", () => {
  let tempCos = Math.cos(display.value);
  display.value = tempCos;
});
sin.addEventListener("click", () => {
  let tempSin = Math.sin(display.value);
  display.value = tempSin;
});
tan.addEventListener("click", () => {
  let tempTan = Math.tan(display.value);
  display.value = tempTan;
});

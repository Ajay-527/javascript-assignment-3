let value = parseInt(prompt("Enter the number"));
let res = 0;
let string = "";
let indValue = value.toString().split("");
indValue.forEach((num) => (res = res + num * num * num));
if (res === value) {
  string = "Armstrong Number";
} else {
  string = "Not Armstrong Number";
}
alert(string);

let value = parseInt(prompt("Enter the number"));
let res = 1;
let string = "";
let total = 0;
let indValue = value.toString().split("");
indValue.forEach((num) => {
  if (num == 0 || num == 1) {
    res = 1;
  } else {
    for (var i = num; i >= 1; i--) {
      res = res * i;
    }
  }
  total = total + res;
  res = 1;
});

if (total === value) {
  string = "Special Number";
} else {
  string = "Not Special Number";
}
alert(string);

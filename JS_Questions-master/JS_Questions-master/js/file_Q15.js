///Q15: Find the sum of 10 input numbers.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("Enter a value"))
  sum = sum + num;

}
document.write("sum of 10 input number is " + sum)
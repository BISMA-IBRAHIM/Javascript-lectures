//Q18: Find the average of n input numbers.
let n = parseInt(prompt("Enter a number"))
let sum = 0;
for (let i = 1; i <= n; i++) {
  let num = parseInt(prompt("Enter a value"))
  sum += num;


}
let average = sum / n;
document.write("The average of " + n + "input number is:" + average);
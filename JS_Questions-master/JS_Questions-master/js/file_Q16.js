//Q16: Find the sum of n input numbers.
let n = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  let num = parseInt(prompt("Enter a value"))
  sum = sum + num;
}
document.write("sum of n Input number is. " + sum)
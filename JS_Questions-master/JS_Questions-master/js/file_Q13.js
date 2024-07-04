//Q9: Find sum of 1st n positive integer (ssume user enter a +ve value for n).
let n = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
document.write("sum of 1st n Positive number is " + sum);
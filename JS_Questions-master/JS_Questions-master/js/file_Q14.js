//Q14: Find the sum of all positive number from m to n(assume user enter a +ve value for m and n).


let n = parseInt(prompt("Enter a value"));
let m = parseInt(prompt("Enter a value"))
let sum = 0;
for (let i = m; i <= n; i++) {
  sum = sum + i;

}
document.write("sum of all positive num from m to n is " + sum)
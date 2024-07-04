//Q20: Find the largest number of n.
let n = parseInt(prompt("Enter a number"));
let largest = 0;
for (let i = 1; i <= n; i++) {
  let num = parseInt(prompt("ENter a value"))
  if (num > largest) {
    largest = num;

  }

}
document.write("The largest number of " + n + "input number is:" + largest);
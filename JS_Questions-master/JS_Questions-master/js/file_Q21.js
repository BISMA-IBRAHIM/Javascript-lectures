//Q21: Find the smallest input of n numbers.
let n = parseInt(prompt("Enter a number"));
let smallest = 0;
for (let i = 1; i <= n; i++) {
  let num = parseInt(prompt("Enter a value"))
  if (num < smallest) {
    smallest = num;
  }
}
document.write("The smallest number of " + n + "input number is:" + smallest);
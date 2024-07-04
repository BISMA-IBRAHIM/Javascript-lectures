//Q28: Find out whether n is perfect square or not.
var n = prompt("Enter a number");
var count = 0;
for (var i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;
  } else {
    count = count;
  }
}
if (count == 2) {
  document.write("The number is perfect square");
} else {
  document.write("The number is perfect square");
}
//Q:26: find out the total no. off factors of n.
var n = prompt("enter a number");
var count = 0;
for (var i = 1; i <= n; i++) {
  if (n % i == 0) {
    count++;

  } else {
    count = count;
  }
}
document.write("The total no. of factors of n is:" + count);
//Q8: Print all positive number from m to n(assume user enter a+ve value of m and n i.e(m<n)).


let n = parseInt(prompt("Enter a number"))
let m = parseInt(prompt("Enter a number"))
for (let i = m; i <= n; i++) {
  if (i > 0) {
    document.write(i + "its a positive number <br>")
  } else {
    document.write(i + "its a negative number <br>")
  }
}
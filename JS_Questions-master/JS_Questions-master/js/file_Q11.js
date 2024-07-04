//Q7: Print all positive number from 1 to n.(assume user enters a+ve value of n i.e(n>0)).
let numAsInput = parseInt(prompt("Enter a number"));
for (let i = 0; i <= numAsInput; i++) {
  if (i > 0) {
    document.write(i + "its a Positive number <br>")
  } else {
    document.write( "its a negative number <br>")
  }
}
//Q22: Generate 1st 12 multiples of n.(aka multiplication table of n till 12).

var num = prompt("Enter Your Table Number")

for (var m = 1; m <= 12; m++) {


  finalres = num * m;

  document.write(num + " X " + m + " = " + finalres)

  document.write("<br>")

}

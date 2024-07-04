 //Q25: Take two numbers, a and b , as input and find (a power b).
var a = prompt("Enter a number");
var b = prompt("Enter a number");
var power = 1;
for (var i = 1; i <= b; i++) {
  power *= a;

}
document.write(power);
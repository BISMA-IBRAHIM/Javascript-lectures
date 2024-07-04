 // find two numbers a and b as input and find axb (i.e their product )without using "*"
 function multiply(a,b){
    var product=0;
    var multiply=(b<0)?-1 :1;
    for (var i=0; i< Math.abs(b);i++){
        product+=a*multiply;
    }
    return product;
   }
   var num1 = parseFloat(prompt("Enter the first number: "));
       var num2 = parseFloat(prompt("Enter the second number: "));
       var result=multiply(num1,num2);
       console.log("product:",result);

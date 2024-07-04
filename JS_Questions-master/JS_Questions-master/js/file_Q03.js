//Q4:Take n number as input and count how many are positive (count zero as Positive ).

let numberAsInput=parseInt(prompt("Number Of Inputs"));

for (let i = 1; i <= numberAsInput; i++) {

    var num = parseInt(prompt(`Enter Your Number${i}`));
    if (num > 0) {

        document.write(num + "Positive <br>")
    } else {
        document.write(num + "Negative <br>")
    }


}
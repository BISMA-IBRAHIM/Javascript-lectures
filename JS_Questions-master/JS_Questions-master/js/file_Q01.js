//Q2:  Take 10 number as input and print whether each number is positive or not .
for (let i = 1; i <= 10; i++) {

    var num = parseInt(prompt(`Enter Your Number${i}`));
    if (num > 0) {

        document.write(num + "Positive <br>")
    } else {
        document.write(num + "Negative <br>")
    }


}
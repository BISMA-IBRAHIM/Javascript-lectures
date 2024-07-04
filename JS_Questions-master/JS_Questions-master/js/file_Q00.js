//Q1: Take 5 number as input and print whether each number is positive or not .

for (let i = 1; i <= 5; i++) {

    var num = parseInt(prompt(`Enter Your Number${i}`));
    if (num > 0) {

        document.write(num + "Positive <br>")
    } else {
        document.write(num + "Negative <br>")
    }


}
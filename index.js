var number = prompt("Convert to roman numeral:"); //input range: 1-3999
let numeral = "";

function convert (symbol, value, int) {
    numeral += symbol.repeat(int / value);
    number %= value;
}

convert('M', 1000, number);
convert('CM', 900, number);
convert('D', 500, number);
convert('CD', 400, number);
convert('C', 100, number);
convert('XC', 90, number);
convert('L', 50, number);
convert('XL', 40, number);
convert('X', 10, number);
convert('IX', 9, number);
convert('V', 5, number);
convert('IV', 4, number);
convert('I', 1, number);

document.getElementById("output").innerText = numeral;

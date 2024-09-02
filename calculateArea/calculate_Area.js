let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;

    document.getElementById("result").innerHTML = `the area of rectangle is: ${area}`;
}

let amount1;
let amount2;
let amount3;

function groceryTracker() {
    amount1 = parseFloat(document.getElementById("item1").value);
    amount2 = parseFloat(document.getElementById("item2").value);
    amount3 = parseFloat(document.getElementById("item3").value);

    let totalAmount = amount1 + amount2 + amount3 ;

    document.getElementById("totalAmount").innerHTML = `The total amount is: $ ${totalAmount}`;
}
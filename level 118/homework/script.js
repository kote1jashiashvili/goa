let numElement = document.getElementById("number");

function add() {
    let numberValue = parseInt(numElement.innerText); // წაიკითხეთ რიცხვი div-დან
    if (isNaN(numberValue)) {
        numElement.innerText = "გთხოვთ, შეიყვანოთ ციფრი!";
    } else {
        numElement.innerText = numberValue + 1; // გაზარდეთ რიცხვი 1-ით
    }
}

function subtract() {
    let numberValue = parseInt(numElement.innerText); // წაიკითხეთ რიცხვი div-დან
    if (isNaN(numberValue)) {
        numElement.innerText = "გთხოვთ, შეიყვანოთ ციფრი!";
    } else {
        numElement.innerText = numberValue - 1; // შეამცირეთ რიცხვი 1-ით
    }
}
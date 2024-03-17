function getTip(e) {
    e.preventDefault();
    
    let priceInput = document.getElementById("price").value;
    let percentageInput =  document.getElementById("percentage").value;

    if(priceInput == "" || percentageInput == "") {
        alert("Fill in the fields!");
        return;
    }

    if(isNaN(priceInput) || isNaN(percentageInput)){
        alert("Insira valores válidos!")
        return;
    }

    let price = parseFloat(priceInput);
    let percentageInDecimal = parseFloat(percentageInput) / 100;

    let tip = calculateTip(price, percentageInDecimal);
    let total = calculateTotalAmount(price, tip)

    let tipP = document.getElementById("tipResult");
    let totalP = document.getElementById("totalResult");
    tipP.innerHTML = `Tip: ${tip.toFixed(2)}`;
    totalP.innerHTML = `Total Amount: ${total.toFixed(2)}`;
}

function calculateTip(price, percentage) {
    return price * percentage
}

function calculateTotalAmount(price, tip) {
    return price + tip
}
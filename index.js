function submitData(e) {
    e.preventDefault();
    
    let priceInput = parseInt(document.getElementById("price").value);
    let percentageInput =  parseInt(document.getElementById("percentage").value);

    let percentageInDecimal = percentageInput / 100;

    let tip = calculateTip(priceInput, percentageInDecimal);
    let total = calculateTotalAmounth(priceInput, tip)

    let tipP = document.getElementById("tipResult");
    let totalP = document.getElementById("totalResult");
    tipP.innerHTML = `Tip: ${tip}`;
    totalP.innerHTML = `Total: ${total}`;
}

function calculateTip(price, percentage) {
    return price * percentage
}

function calculateTotalAmounth(price, tip) {
    return price + tip
}
// ¡Buena suerte!
const btnCalTotal = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const outputTotal = document.getElementById('total');

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    outputTotal.innerHTML = totalValue.toFixed(2);
}

btnCalTotal.addEventListener('click', calculateTotal)
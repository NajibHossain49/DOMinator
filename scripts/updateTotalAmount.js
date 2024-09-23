// Update total amount in the header
function updateTotalAmount(newAmount) {
    let totalAmountSpan = document.querySelector('.flex.items-center.ml-4 span');
    let totalAmount = parseFloat(totalAmountSpan.innerText.replace(' BDT', '')) || 0;

    // Update the total amount
    totalAmount -= newAmount;
    totalAmountSpan.innerText = totalAmount + ' BDT';
}

function updateAmount(inputId, amountId, causeTitle) {
    let inputField = document.getElementById(inputId);
    let amountSpan = document.getElementById(amountId);
    let totalAmountSpan = document.querySelector('.flex.items-center.ml-4 span');

    
    let newAmount = parseFloat(inputField.value) || 0;

    // Check if the input amount is less than or equal to zero
    if (newAmount <= 0) {
        alert("Please enter a positive Amount.");
        inputField.value = '';
        return;
    }

    
    let totalAmount = parseFloat(totalAmountSpan.innerText.replace(' BDT', '')) || 0;

    // Check if the totalAmount is 0 and prevent donation
    if (totalAmount === 0) {
        alert("You can't donate because your Total Amount is empty.");
        inputField.value = '';
        return;
    }

    // Check if the new donation amount exceeds the total amount
    if (newAmount > totalAmount) {
        alert("You can't donate more than your Available Total Amount.");
        inputField.value = '';
        return;
    }

    
    let currentAmount = parseFloat(amountSpan.innerText.replace(' BDT', '')) || 0;

    // Update the current amount 
    currentAmount += newAmount;
    amountSpan.innerText = currentAmount + ' BDT';

    
    inputField.value = '';

    // Update the total amount in the header (subtract the new donation from the total)
    updateTotalAmount(newAmount);

    // Add donation to history
    addDonationToHistory(causeTitle, newAmount);

    // Show the modal after a successful donation
    showModal();
}

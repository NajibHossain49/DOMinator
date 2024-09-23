function addDonationToHistory(causeTitle, amount) {
    let historyList = document.getElementById('history-list');

    // Create a new div for each donation entry
    let newItem = document.createElement('div');
    newItem.classList.add('history-entry');


    let currentDate = new Date();
    let formattedDate = `Date: ${currentDate.toString()}`;


    let donationText = document.createElement('p');
    donationText.classList.add('amount');
    donationText.textContent = `${amount} Taka - ${causeTitle}`;


    let dateText = document.createElement('p');
    dateText.classList.add('date');
    dateText.textContent = formattedDate;


    newItem.appendChild(donationText);
    newItem.appendChild(dateText);


    historyList.appendChild(newItem);
}
document.addEventListener('DOMContentLoaded', function () {
    // Noakhali
    let donateButtonNoakhali = document.getElementById('donate-noakhali');
    donateButtonNoakhali.addEventListener('click', function () {
        updateAmount('input-noakhali', 'amount-noakhali', 'Donated for famine-2024 at Noakhali, Bangladesh');
    });

    // Feni
    let donateButtonFeni = document.getElementById('donate-feni');
    donateButtonFeni.addEventListener('click', function () {
        updateAmount('input-feni', 'amount-feni', 'Donated for Flood Relief in Feni,Bangladesh');
    });

    // Quota Movement
    let donateButtonQuota = document.getElementById('donate-quota');
    donateButtonQuota.addEventListener('click', function () {
        updateAmount('input-quota', 'amount-quota', 'Donated for Aid for Injured in the Quota Movement, Bangladesh');
    });


    // Show donation history and hide main section
    document.getElementById('historyBtn').addEventListener('click', function (e) {
        e.preventDefault();


        document.querySelector('main').classList.add('hidden');
        document.getElementById('donation-history').classList.remove('hidden');


        this.classList.add('bg-[#B4F461]');
        document.getElementById('donateBtn').classList.remove('bg-[#B4F461]');
    });

    // Show main section and hide donation history
    document.getElementById('donateBtn').addEventListener('click', function (e) {
        e.preventDefault();


        document.querySelector('main').classList.remove('hidden');
        document.getElementById('donation-history').classList.add('hidden');


        this.classList.add('bg-[#B4F461]');
        document.getElementById('historyBtn').classList.remove('bg-[#B4F461]');
    });

    // Event listener to close the modal
    document.getElementById('close-modal').addEventListener('click', closeModal);
});


// Function to redirect to the Blog.html page
document.getElementById("blogButton").addEventListener("click", function () {
    window.location.href = "Blog.html";
});


// Function to show the modal
function showModal() {
    let modal = document.getElementById('donation-modal');
    modal.classList.remove('hidden');
}

// Function to close the modal
function closeModal() {
    let modal = document.getElementById('donation-modal');
    modal.classList.add('hidden');
}

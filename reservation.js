document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('submit-modal');
    const closeBtn = document.querySelector('.close');
    const form = document.querySelector('form'); // Select the form element
    const modalDetails = document.getElementById('modal-details');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const partySize = document.getElementById('party-size').value;
        const reservationDate = document.getElementById('reservation-date').value;
        const reservationTime = document.getElementById('reservation-time').value;
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const phone = document.getElementById('contact-phone').value;

        // Populate modal
        modalDetails.innerHTML = `
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>People:</strong> ${partySize}</p>
            <p><strong>Date:</strong> ${reservationDate}</p>
            <p><strong>Time:</strong> ${reservationTime}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Number:</strong> ${phone}</p>
        `;

        // Show modal
        modal.style.display = "block";
    });

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };
    
    // Close modal if clicked outside the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
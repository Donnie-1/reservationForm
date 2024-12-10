document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('submit-modal');
    const closeBtn = document.querySelector('.close');
    const form = document.querySelector('form');
    const modalDetails = document.getElementById('modal-details');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const partySize = document.getElementById('party-size').value;
        const reservationDate = document.getElementById('reservation-date').value;
        const reservationTime = document.getElementById('reservation-time').value;
        const name = document.getElementById('contact-name').value;
        let email = document.getElementById('contact-email').value;
        let phone = document.getElementById('contact-phone').value;
        
        let contactMethod = '';
        if (email) {
            contactMethod = `<p><strong>Email:</strong> ${email}</p>`;
        } else if (phone) {
            contactMethod = `<p><strong>Number:</strong> ${phone}</p>`;
        }
        
        // Populate modal
        modalDetails.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>People:</strong> ${partySize}</p>
            <p><strong>Date:</strong> ${reservationDate}</p>
            <p><strong>Time:</strong> ${reservationTime}</p>
            ${contactMethod}
        `;

        // Show modal
        modal.style.display = "block";
    });

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };
    
    // Close modal if clicked outside the modal
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const submitButton = document.getElementById('submit');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // Add spinner animation
      submitButton.disabled = true;
      submitButton.innerHTML = `<div class="spinner"></div>Processing...`;
  
      // Simulate async operation (e.g., AJAX request)
      setTimeout(() => {
        // Change to success state
        submitButton.classList.add('button-success');
        submitButton.innerHTML = `Reservation Confirmed!`;
      }, 3000); // Adjust timeout as needed
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const submitButton = document.getElementById('submit');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
      
      // Add spinner animation
      submitButton.disabled = true;
      submitButton.innerHTML = `<div class="spinner"></div>Processing...`;
  
      // Simulate async operation (e.g., AJAX request)
      setTimeout(() => {
        // Change to success state
        submitButton.classList.add('button-success');
        submitButton.innerHTML = `Reservation Confirmed!`;
  
        // message
        const feedbackMessage = document.createElement('p');
        feedbackMessage.className = 'feedback-message';
        feedbackMessage.textContent = 'Check your email or phone number for confirmation.';
        
        // Append the message below the button
        submitButton.parentNode.appendChild(feedbackMessage);
      }, 2000); // Adjust timeout as needed
    });
  });
  
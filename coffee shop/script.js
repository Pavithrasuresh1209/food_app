// Select all order buttons
const orderButtons = document.querySelectorAll('.buy-button');

// Function to handle order button click
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the parent menu item
        const menuItem = button.closest('.menu-item');
        // Get the price from the data-price attribute
        const price = menuItem.querySelector('.price').dataset.price;

        // Store the price in localStorage
        localStorage.setItem('orderAmount', price);
        
        // Navigate to the order summary page
        window.location.href = 'order-summary.html'; // Make sure to create this page
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const submissionMessage = document.getElementById('submissionMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Display submission message
    submissionMessage.style.display = 'block';

    // Optionally clear the form fields
    contactForm.reset();
    // Payment Form Submission
document.getElementById('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Here you can handle form data submission to the server (if needed)
  
  // Navigate to success page
  window.location.href = 'success.html';
});

});



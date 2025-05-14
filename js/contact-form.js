document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real implementation, you would send the data to a server here
            // For this example, we'll just show a success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showSuccessMessage() {
        // Create success message element
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.innerHTML = `
            <div class="success-content">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We will get back to you soon.</p>
                <button class="btn btn-primary">OK</button>
            </div>
        `;
        
        // Add to body
        document.body.appendChild(successMsg);
        
        // Close button functionality
        const closeBtn = successMsg.querySelector('button');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(successMsg);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("XmxRLIEQ-uIcXbf1w"); // Replace with your actual EmailJS user ID

    // Contact form submission logic
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        if (validateForm()) { // Validate form before sending
            const params = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                category: document.getElementById("category").value,
                message: document.getElementById("message").value,
            };

            emailjs.send("service_9vfly1a", "template_xzho8qs", params) // Replace with your service and template IDs
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully!');
                    document.getElementById('contact-form').reset(); // Reset form after successful submission
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('Failed to send message. Please try again later.');
                });
        }
    });

    // Visitor count logic using localStorage
    function updateVisitorCount() {
        let count = localStorage.getItem('visitorCount');
        count = count ? parseInt(count, 10) + 1 : 1; // Increment count or initialize to 1
        localStorage.setItem('visitorCount', count); // Update localStorage with new count
        document.getElementById('visitor-count').textContent = `I am honored to have been visited by ${count} individuals. Thank you for taking the time to explore my page.`;
    }
    updateVisitorCount(); // Update visitor count on document load

    // Form validation function
    function validateForm() {
        // Implement validation logic here. Return true if form is valid, or false if not.
        // Example:
        return document.getElementById("name").value.trim() !== "" &&
               document.getElementById("email").value.trim() !== "" &&
               document.getElementById("message").value.trim() !== "";
        // Add more conditions as necessary.
    }  
});
document.addEventListener('DOMContentLoaded', function () {
    var chatIcon = document.querySelector('.chatbot-icon');
    var chatWindow = document.getElementById('chat-interface');
    var userInputField = document.getElementById('user-input');
    var sendButton = document.getElementById('send-button');
    var chatBox = document.getElementById('chatbox');

    // Toggle chat window
    chatIcon.addEventListener('click', function () {
        chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
    });

    // Send button click handler
    sendButton.addEventListener('click', function () {
        var userMessage = userInputField.value.trim();
        if (userMessage) {
            displayChatbotMessage(userMessage, true);
            var botMessage = processUserCommand(userMessage);
            displayChatbotMessage(botMessage, false);
            userInputField.value = ''; // Clear input field after sending the message
        }
    });

    // Enter key press handler for input field
    userInputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    // Function to process the user's message
    function processUserCommand(message) {
        var lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
            return 'Hello! How is your day?';
        } else if (lowerCaseMessage.includes('help')) {
            return 'Hello! How can I assist you today? 😊';
        }
        else if(lowerCaseMessage.includes('bad')){
            return 'Sorry! i will try to improve 😓';
        } else {
            return 'Sorry, I am not sure how to respond to that. Can you try asking something else?';
        }
    }

    // Function to display messages in the chatbox
    function displayChatbotMessage(message, isUser) {
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = isUser ? 'user-message' : 'chatbot-message';
        chatBox.appendChild(messageElement);
    }
});

// In this example, JavaScript isn't necessary because the widths are inline.
// However, if you want to dynamically set them, you could use JavaScript similar to this:

document.addEventListener('DOMContentLoaded', function() {
    var skills = {
      'UI/UX DESIGN': 80,
      'CSS': 75,
      'C C++': 87,
      'HTML': 95,
      'PYTHON': 75,
      'JAVA': 70
    };
  
    Object.keys(skills).forEach(function(skill) {
      var elements = document.querySelectorAll(`label[for="${skill}"]`);
      elements.forEach(function(element) {
        var progressBar = element.nextElementSibling.firstElementChild;
        progressBar.style.width = skills[skill] + '%';
        var percentage = element.parentElement.querySelector('.percentage');
        percentage.textContent = skills[skill] + '%';
      });
    });
  });
  



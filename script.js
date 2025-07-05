// Feedback Form JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.querySelector('.feedback-container');
    const submitButton = document.querySelector('button[type="submit"]');
    const emojis = document.querySelectorAll('.emoji');
    const textarea = document.querySelector('textarea[name="comments"]');
    
    // Variables to store form data
    let selectedEmoji = null;
    let formData = {
        mentor: {
            firstName: '',
            lastName: ''
        },
        mentee: {
            firstName: '',
            lastName: ''
        },
        evaluation: {},
        emojiRating: null,
        comments: ''
    };

    // Emoji selection functionality
    emojis.forEach((emoji, index) => {
        emoji.addEventListener('click', function() {
            // Remove active class from all emojis
            emojis.forEach(e => e.classList.remove('active'));
            // Add active class to clicked emoji
            this.classList.add('active');
            selectedEmoji = this.textContent;
            formData.emojiRating = selectedEmoji;
        });
    });

    // Real-time form data collection
    function collectFormData() {
        // Collect mentor name
        formData.mentor.firstName = document.querySelector('input[name="mentorFirstName"]').value.trim();
        formData.mentor.lastName = document.querySelector('input[name="mentorLastName"]').value.trim();
        
        // Collect mentee name
        formData.mentee.firstName = document.querySelector('input[name="menteeFirstName"]').value.trim();
        formData.mentee.lastName = document.querySelector('input[name="menteeLastName"]').value.trim();
        
        // Collect evaluation responses
        const radioGroups = ['x', 'y', 'z', 'a', 'av', 'b', 'availability'];
        const criteriaLabels = [
            'My mentor has been readily available and reachable',
            'My mentor provided support in order to address my academic difficulties',
            'My mentor provided guidance and assistance in ensuring the submissions of my deliverables and performance',
            'My mentor expressed concern towards me',
            'My mentor demonstrated professionalism and courtesy all the time',
            'My mentor has been beneficial to me',
            'I look forward for another term of mentoring with my mentor'
        ];
        
        radioGroups.forEach((groupName, index) => {
            const selectedRadio = document.querySelector(`input[name="${groupName}"]:checked`);
            formData.evaluation[criteriaLabels[index]] = selectedRadio ? selectedRadio.value : null;
        });
        
        // Collect comments
        formData.comments = textarea.value.trim();
    }

    // Form validation
    function validateForm() {
        let isValid = true;
        let errorMessages = [];

        // Check mentor name
        if (!formData.mentor.firstName || !formData.mentor.lastName) {
            errorMessages.push('Please enter both first and last name of the mentor');
            isValid = false;
        }

        // Check mentee name
        if (!formData.mentee.firstName || !formData.mentee.lastName) {
            errorMessages.push('Please enter both first and last name of the mentee');
            isValid = false;
        }

        // Check if all evaluation questions are answered
        const criteriaLabels = [
            'My mentor has been readily available and reachable',
            'My mentor provided support in order to address my academic difficulties',
            'My mentor provided guidance and assistance in ensuring the submissions of my deliverables and performance',
            'My mentor expressed concern towards me',
            'My mentor demonstrated professionalism and courtesy all the time',
            'My mentor has been beneficial to me',
            'I look forward for another term of mentoring with my mentor'
        ];
        
        criteriaLabels.forEach(criteria => {
            if (!formData.evaluation[criteria]) {
                errorMessages.push(`Please answer: ${criteria}`);
                isValid = false;
            }
        });

        // Check emoji rating
        if (!formData.emojiRating) {
            errorMessages.push('Please select an emoji rating');
            isValid = false;
        }

        return { isValid, errorMessages };
    }

    // Show error messages
    function showErrors(errorMessages) {
        // Remove existing error messages
        const existingErrors = document.querySelectorAll('.error-message');
        existingErrors.forEach(error => error.remove());

        // Create and display new error messages
        errorMessages.forEach(message => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.cssText = 'color: #ff4444; background: #ffe6e6; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ffcccc;';
            errorDiv.textContent = message;
            form.insertBefore(errorDiv, submitButton.parentElement);
        });
    }

    // Show success message
    function showSuccess() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.style.cssText = 'color: #28a745; background: #d4edda; padding: 15px; margin: 15px 0; border-radius: 5px; border: 1px solid #c3e6cb; text-align: center; font-weight: bold;';
        successDiv.textContent = 'Thank you! Your feedback has been submitted successfully.';
        form.insertBefore(successDiv, submitButton.parentElement);
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = 'Submitted ✓';
        submitButton.style.backgroundColor = '#28a745';
    }

    // Handle form submission
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Collect form data
        collectFormData();
        
        // Validate form
        const validation = validateForm();
        
        if (!validation.isValid) {
            showErrors(validation.errorMessages);
            return;
        }

        // If validation passes, process the form
        console.log('Form Data:', formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        showSuccess();
        
        // Optional: Save to localStorage for demo purposes
        const feedbackHistory = JSON.parse(localStorage.getItem('feedbackHistory') || '[]');
        feedbackHistory.push({
            ...formData,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('feedbackHistory', JSON.stringify(feedbackHistory));
    });

    // Add visual feedback for radio button selection
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            // Add visual feedback to the selected row
            const row = this.closest('tr');
            document.querySelectorAll('tbody tr').forEach(r => r.classList.remove('selected'));
            row.classList.add('selected');
        });
    });

    // Add character counter for comments
    textarea.addEventListener('input', function() {
        const maxLength = 500;
        const currentLength = this.value.length;
        const remaining = maxLength - currentLength;
        
        // Remove existing counter
        const existingCounter = document.querySelector('.char-counter');
        if (existingCounter) {
            existingCounter.remove();
        }
        
        // Add new counter
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = 'font-size: 12px; color: #666; text-align: right; margin-top: 5px;';
        counter.textContent = `${currentLength}/${maxLength} characters`;
        
        if (remaining < 50) {
            counter.style.color = '#ff4444';
        }
        
        textarea.parentElement.appendChild(counter);
    });

    // Add loading state to submit button
    submitButton.addEventListener('click', function() {
        if (this.disabled) return;
        
        this.textContent = 'Submitting...';
        this.style.backgroundColor = '#6c757d';
        
        // Simulate processing time
        setTimeout(() => {
            this.textContent = 'Submit Feedback';
            this.style.backgroundColor = '';
        }, 2000);
    });
}); 
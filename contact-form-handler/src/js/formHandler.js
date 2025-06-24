// src/js/formHandler.js

import { validateForm } from './validation.js';
import { showSuccessNotification, showErrorNotification } from './notifications.js';
import { sendEmail } from '../utils/emailService.js';

document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        inquiryType: document.getElementById('inquiry-type').value,
        message: document.getElementById('message').value,
    };

    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
        validationErrors.forEach(error => showErrorNotification(error));
        return;
    }

    try {
        await sendEmail(formData);
        showSuccessNotification('Your message has been sent successfully!');
        document.getElementById('contact-form').reset();
    } catch (error) {
        showErrorNotification('There was an error sending your message. Please try again later.');
    }
});
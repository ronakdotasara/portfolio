const nodemailer = require('nodemailer');

const sendEmail = async (formData) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '24bee083@nith.ac.in',  // Your NITH email
            pass: '12345678', // Generate this from Google Account settings
        },
    });

    const mailOptions = {
        from: '24bee083@nith.ac.in',
        to: 'ronakdotasara05@gmail.com',
        subject: `New Portfolio Contact: ${formData.name}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject || 'No Subject'}</p>
            <p><strong>Inquiry Type:</strong> ${formData['inquiry-type']}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
            <hr>
            <p><em>Sent from your portfolio website contact form</em></p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email. Please try again later.');
    }
};

module.exports = { sendEmail };
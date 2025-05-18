// validation.js

export function validateName(name) {
    if (!name) {
        return "Name is required.";
    }
    return "";
}

export function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return "Email is required.";
    } else if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
    }
    return "";
}

export function validateSubject(subject) {
    return subject ? "" : "Subject is optional.";
}

export function validateMessage(message) {
    if (!message) {
        return "Message is required.";
    }
    return "";
}

export function validateInquiryType(inquiryType) {
    const validTypes = ["collaboration", "project-guidance", "general-query", "other"];
    if (!validTypes.includes(inquiryType)) {
        return "Invalid inquiry type.";
    }
    return "";
}
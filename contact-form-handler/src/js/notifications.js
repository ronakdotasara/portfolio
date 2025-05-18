export function showSuccessNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerText = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

export function showErrorNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification error';
    notification.innerText = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
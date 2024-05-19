function getCurrentDateTime() {
    let currentDate = new Date();
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',

    };
    return currentDate.toLocaleDateString('en-US', options);
}


// Update the datetime 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('datetime').textContent = getCurrentDateTime();
});
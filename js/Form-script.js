
const emailInput = document.querySelector('input[name="your-email"]');
const warningMessage = document.querySelector('.warning');

emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        warningMessage.style.display = 'none'; // Hide the warning if input is valid
    } else {
        warningMessage.style.display = 'block'; // Show the warning if input is invalid
    }
});



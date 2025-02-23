document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const name = document.getElementById('fullname').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    const email = document.getElementById('userEmail').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    const phone = document.getElementById('userPhone').value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
        valid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    const dob = document.getElementById('userDob').value;
    if (!dob) {
        document.getElementById('dobError').textContent = 'Select your date of birth.';
        valid = false;
    } else {
        document.getElementById('dobError').textContent = '';
    }

    const password = document.getElementById('userPassword').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must accept the terms.';
        valid = false;
    } else {
        document.getElementById('termsError').textContent = '';
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});

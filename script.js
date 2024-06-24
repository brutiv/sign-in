document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.sign-in');
    const cancelButton = document.querySelector('.cancelbtn');
    const rememberMeCheckbox = document.querySelector('input[name="remember"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = form.email.value;
        const password = form.psw.value;

        if (email === '' || password === '') {
            alert('Please fill in both email and password.');
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);
        alert('Logged in successfully!');
    });

    cancelButton.addEventListener('click', function() {
        form.email.value = '';
        form.psw.value = '';
        rememberMeCheckbox.checked = false;
    });
});

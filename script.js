const feedbackForm = document.getElementById('feedbackForm');
const message = document.getElementById('message');
const submit = document.getElementById('submit-button');
let x = false;

feedbackForm.addEventListener('submit', event => {
    if (x === false) {
        event.preventDefault();
        message.style.display = 'block';
        x = true;
        submit.style.display = 'none';
    } else {
        message.style.display = 'none';
    }
})
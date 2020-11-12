const sendForm = document.querySelector('.send__form'),
    name = document.querySelector('#user-name'),
    phone = document.querySelector('#user-phone'),
    email = document.querySelector('#user-email'),
    emailRepeat = document.querySelector('#user-name');

function validateName (name) {
    const regName = /\s+ \s+/i
    return regName.test(name);
}

function validatePhone (phone) {
    const regPhone = /^\d+$/
    return regPhone.test(phone);
}

function validateEmail (email) {
    // const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const regEmail = /\S+@\S+\.\S+/
    return regEmail.test(email);
}

function validateEmailRepeat (email, emailRepeat) {
    return email === emailRepeat;
}


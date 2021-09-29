let form = document.querySelector('.form');
let customerName = document.querySelector('.cname');
let course = document.querySelector('.course');
let author = document.querySelector('.author');
let submitBtn = document.querySelector('.submit');
let textLength = /^[A-Za-z. ]{3,30}$/;

//error message function
let errorMsg = (input, message) => {
    var formControl = input.parentElement;
    if(formControl.classList.contains('success')) {
        formControl.classList.remove('success');
    }
    var small = input.nextElementSibling;
    small.innerText = message;
    if(!formControl.classList.contains('error'))
    formControl.className += ' error';
}

//success message function
let successMsg = (input) => {
    var formControl = input.parentElement;
    if(formControl.classList.contains('error')) {
        formControl.classList.remove('error');
    }
    if(!formControl.classList.contains('success'))
    formControl.className += ' success';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
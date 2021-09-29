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

let inputValue = (e) => {
    let error = false;
    if(customerName.value == "") {
        errorMsg(customerName, '*This field is required');
        error = true;
    } else if(!textLength.test(customerName.value)) {
        errorMsg(customerName, 'Enter valid item');
        error = true;
    } else {
        successMsg(customerName);
    }

    if(course.value == "") {
        errorMsg(course, '*This field is required');
        error = true;
    } else if(!textLength.test(course.value)) {
        errorMsg(course, 'Enter valid item');
        error = true;
    } else {
        successMsg(course);
    }

    if(author.value == "") {
        errorMsg(author, '*This field is required');
        error = true;
    } else if(!textLength.test(author.value)) {
        errorMsg(author, 'Enter valid item');
        error = true;
    } else {
        successMsg(author);
    }
}

//input field focusout function
customerName.addEventListener('focusout', () => {
    if(customerName.nextElementSibling.classList.contains('none')) {
        customerName.nextElementSibling.classList.remove('none');
    }
    inputValue();
})

course.addEventListener('focusout', () => {
    if(course.nextElementSibling.classList.contains('none')) {
        course.nextElementSibling.classList.remove('none');
    }
    inputValue();
})

author.addEventListener('focusout', () => {
    if(author.nextElementSibling.classList.contains('none')) {
        author.nextElementSibling.classList.remove('none');
    }
    inputValue();
})
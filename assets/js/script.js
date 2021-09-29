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

let inputValue = (e) => {
    let error = false;
    if(customerName.value == "") {
        errorMsg(customerName, '*This field is required');
        error = true;
    } else if(!textLength.test(customerName.value)) {
        errorMsg(customerName, 'Enter valid name');
        error = true;
    } else {
        successMsg(customerName);
    }

    if(course.value == "") {
        errorMsg(course, '*This field is required');
        error = true;
    } else if(!textLength.test(course.value)) {
        errorMsg(course, 'Enter valid course');
        error = true;
    } else {
        successMsg(course);
    }

    if(author.value == "") {
        errorMsg(author, '*This field is required');
        error = true;
    } else if(!textLength.test(author.value)) {
        errorMsg(author, 'Enter valid author name');
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

//focus function
customerName.addEventListener('focus', () => { 
    customerName.nextElementSibling.className = 'none';
})

course.addEventListener('focus', () => { 
    course.nextElementSibling.className = 'none';
})

author.addEventListener('focus', () => { 
    author.nextElementSibling.className = 'none';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!inputValue()) {
        let customer = localStorage.getItem("customer");
        if(customer == null) {
            customerObj = [];
        } else {
            customerObj = JSON.parse(customer);
        }
        let myObj = {
            nameTitle: customerName.value,
            courseTitle: course.value,
            authorTitle: author.value
        }
        customerObj.push(myObj);
        localStorage.setItem("customer", JSON.stringify(customerObj));
        customerName.value = "";
        course.value = "";
        author.value = "";
    }
    displayCustomerInfo();
})

//display customer details after validation
let displayCustomerInfo = () => {
    let customer = localStorage.getItem("customer");
    if(customer == null) {
        customerObj = [];
    } else {
            customerObj = JSON.parse(customer);
        }

    let display = " ";
    customerObj.forEach((element, index) => {
        display += `
        <li class="${index} customer-info" onclick="remove(this.class)">
              <figure>
                <img src="https://source.unsplash.com/random/150x150/?person" alt="Person">
              </figure>
              <ul>
                <li>
                  <span class="display-name">Name: ${element.nameTitle}</span>
                </li>
                <li>
                  <span class="display-course">Course: ${element.courseTitle}</span>
                </li>
                <li>
                  <span class="display-author">Author: ${element.authorTitle}</span>
                </li>
              </ul>
            </li>
        `;
    });

    let displaySection = document.querySelector('.main-display-list');
    if(customerObj.length != 0) {
        displaySection.innerHTML = display;
    } else {
        displaySection.innerHTML = "No customer information added";
    }
}

//remove items function
let remove = (index) => {
    let customer = localStorage.getItem("customer");
    if(customer == null) {
        customerObj = [];
    } else {
            customerObj = JSON.parse(customer);
        }
customerObj.splice(index, 1);
localStorage.setItem("customer", JSON.stringify(customerObj));
displayCustomerInfo();
    
}

displayCustomerInfo();
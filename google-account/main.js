let customEmail=0;
let dict = { 0:0, 1:5, 2:7, 3:9, 4:12, 5:13, 6:13 };

let firstname, lastname, username, email, password, confirmPassword;
let firstnameEleRef, lastnameEleRef, usernameEleRef, passwordEleRef, confirmPasswordEleRef;
firstnameEleRef = document.getElementsByClassName('first-name')[0];
lastnameEleRef = document.getElementsByClassName('last-name')[0];
usernameEleRef = document.getElementsByClassName('user-name')[0];
passwordEleRef = document.getElementsByClassName('password')[0];
confirmPasswordEleRef = document.getElementsByClassName('confirm')[0];

function toggle(a) {
    let steps = document.getElementsByClassName('step');
    let stepOpt = document.getElementsByClassName('step-opt');
    for(let i=0 ; i<steps.length ; i++) {
        stepOpt[i].style.background = 'rgb(0, 0, 85)';
        steps[i].style.display = 'none';
    }
    stepOpt[a].style.background = '#0000b5';
    steps[a].style.display = 'grid';
    toggleInstruction(dict[a]);
}

function togglePassword(el) {
    let password = document.getElementsByClassName('password')[0];
    let confirm = document.getElementsByClassName('confirm')[0];
    password.type = el.checked ? 'text' : 'password';
    confirm.type = el.checked ? 'text' : 'password';
}
function toggleInnerText(el, text1, text2) {
    el.innerText = (el.innerText === text1) ? text2 : text1;
}
function toggleEmail(el) {
    toggleInnerText(el, "Use my current email address instead", "Create a new Gmail address instead");
    let username = document.getElementsByClassName('user-name')[0];
    customEmail = !customEmail;
    username.placeholder = (username.placeholder === "Username") ? "Your custom email address" : "Username";
    document.getElementsByClassName('email-domain')[0].classList.toggle('none');
    toggleInnerText(document.getElementsByClassName('user-name-suggestion')[0], "You can use letters, numbers & periods", "You'll need to confirm that this email belongs to you.");
    email = `${username.value}${customEmail ? '' : '@gmail.com'}`;
    document.getElementsByClassName('email-display')[0].innerText = email;
}

function validateUsername(a, el) {
    let username = el.value;
    let warning = document.getElementsByClassName('warning-text')[a];
    if(!username.length) {
        document.getElementsByClassName('warning-container')[0].style.display = 'grid';
        warning.style.display = 'block';
        el.style.border = '1px solid red';
        toggleInstruction(a);
        return false;
    } else if(username.length >= 6 && username.length <= 30){
        document.getElementsByClassName('warning-container')[0].style.display = 'none';
        el.style.border = '1px solid rgb(182, 182, 182)';
        warning.innerText = "Username cannot be empty.";
        warning.style.display = 'none';
        toggleInstruction(a+1);
        return true;
    } else {
        document.getElementsByClassName('warning-container')[0].style.display = 'grid';
        warning.innerText = "Username must be between 6 to 30 characters.";
        warning.style.display = 'block';
        el.style.border = '1px solid red';
        toggleInstruction(a);
        return false;
        
    }
}

function toggleInstruction(a) {
    let instructions = document.getElementsByClassName('instruction');
    for(let instruction of instructions) 
        instruction.style.display = 'none';
    instructions[a].style.display = 'block';
}

function validateName(a, el) {
    if(!el.value.length) {
        document.getElementsByClassName('warning-text')[a].style.display = 'block';
        el.style.border = '1px solid red';
        toggleInstruction(a);
        return false;
    } else {
        document.getElementsByClassName('warning-text')[a].style.display = 'none';
        el.style.border = '1px solid rgb(182, 182, 182)';
        toggleInstruction(a+1);
        return true;
    }
}
function validatePassword(a, el) {
    let warning = document.getElementsByClassName('warning-text')[a];
    warning.style.display = 'block';
    el.style.border = '1px solid red';
    toggleInstruction(a);
    if(!el.value.length) {}
    else if(el.value.length<8) {
        warning.innerText = "Password length must be atleast 8 characters.";
    } else {
        warning.style.display = 'none';
        el.style.border = '1px solid rgb(182, 182, 182)';
        warning.innerText = "Password cannot be empty.";
        toggleInstruction(a+1);
        return true;
    }
    return false;
}
function validateConfirm(a, el) {
    let pass = document.getElementsByClassName('password')[0].value;
    let warning = document.getElementsByClassName('warning-text')[a];
    if(el.value !== pass) {
        warning.innerText = 'Password not matched.';
        toggleInstruction(a);
        warning.style.display = 'block';
        el.style.border = '1px solid red';
        return false;
    } else {
        warning.innerText = 'Password cannot be empty.';
        if(pass) {
            warning.style.display = 'none';
            el.style.border = '1px solid rgb(182, 182, 182)';
            toggleInstruction(a+1);
        }
        return true;
    }
}

firstnameEleRef.addEventListener('change', function() {
    firstname = firstnameEleRef.value;
    document.getElementsByClassName('welcome-text')[0].innerText = `${firstname}, welcome to Google`;
});
lastnameEleRef.addEventListener('change', function() {
    lastname = lastnameEleRef.value;
});
usernameEleRef.addEventListener('change', function() {
    username = usernameEleRef.value;
    email = `${username}${customEmail ? '' : '@gmail.com'}`;
    document.getElementsByClassName('email-display')[0].innerText = email;
});
passwordEleRef.addEventListener('change', function() {
    password = passwordEleRef.value;
});

function validateStep1() {
    // toggle(1);
    // return;
    if(validateName(0, firstnameEleRef) &&
        validateName(1, lastnameEleRef) &&
        validateUsername(2, usernameEleRef) &&
        validatePassword(3, passwordEleRef) &&
        validateConfirm(3, confirmPasswordEleRef)) {
            toggle(1);
        } 
}
function validatePhoneNumber(a, el) {
    let warning = document.getElementsByClassName('warning-text')[a];
    if(el.value.length != 10) {
        toggleInstruction(a);
        warning.style.display = 'block';
        el.style.border = '1px solid red';
        return false;
    } else {
        toggleInstruction(a+1);
        warning.style.display = 'none';
        el.style.border = '1px solid rgb(182,182,182)';
        return true;
    }
}
let phoneNumber;
let phoneNumberEleRef = document.getElementsByClassName('phone-number')[0];
phoneNumberEleRef.addEventListener('change', function() {
    phoneNumber = phoneNumberEleRef.value;
    document.getElementsByClassName('phone-number-output')[0].innerText = phoneNumber;
    document.getElementsByClassName('phone-number-optional')[0].value = phoneNumber;
});
function validateStep2() {
    if(validatePhoneNumber(5, phoneNumberEleRef)) {
        toggle(2);
    } 
}
function verifyCode(a, el) {
    let warning = document.getElementsByClassName('warning-text')[a];
    // console.log(el.value)
    if(el.value !== '787825') {
        toggleInstruction(a);
        warning.style.display = 'block';
        el.style.border = '1px solid red';
        return false;
    } else {
        toggleInstruction(a+1);
        warning.style.display = 'none';
        el.style.border = '1px solid rgb(182,182,182)';
        return true;
    }
}
function validateStep3() {
    let verifyCodeEleRef = document.getElementsByClassName('verify-code')[0];
    if(verifyCode(7, verifyCodeEleRef)) {
        toggle(3);
    }
}

document.getElementById('gender').addEventListener('change', function() {
    let otherFieldEleRef = document.getElementsByClassName('other-gender');
    let display;
    if(this.value === 'Custom') display = 'block';
    else display = 'none';
    
    otherFieldEleRef[0].style.display = display;
    otherFieldEleRef[1].style.display = display;
});

function colorDark(el) {
    el.style.color = 'black';
}
function validateGender() {
    let gender = document.getElementById('gender');
    let custom = document.getElementById('custom-gender');
    let referMeAs = document.getElementById('referMeAs');
    let warning = document.getElementsByClassName('warning-text')[10];
    if(!gender.value) {
        warning.style.display = 'block';
        warning.innerText = 'Gender field must be selected.';
        toggleInstruction(10);
        gender.style.border = '1px solid red';
        return false;
    }
    if(gender.value === 'Custom') {
        if(!custom.value || !referMeAs.value) {
            warning.innerText = 'You must enter custom gender and select how to refer you.';
            warning.style.display = 'block';    
            toggleInstruction(10);
            if(!custom.value) custom.style.border = '1px solid red';
            if(!referMeAs.value) referMeAs.style.border = '1px solid red';
            return false;
        }
        toggleInstruction(11);
        custom.style.border = '1px solid rgb(182,182,182)';
        referMeAs.style.border = '1px solid rgb(182,182,182)';
        return true;
    }
    toggleInstruction(11);
    gender.style.border = '1px solid rgb(182,182,182)';
    return true;
}
function validateStep4() {
    let date = document.getElementById('birth-date');
    let month = document.getElementById('birth-month');
    let year = document.getElementById('birth-year');
    if(validateName(9, month) &&
        validateName(9, date) &&
        validateName(9, year) &&
        validateGender()) {
            toggle(4);
        }
}
function moreOptions() {
    let chevron = document.getElementsByClassName('chevron-options')[0];
    chevron.style.transform = (chevron.style.transform == "translate(0px, 2px) rotate(180deg)") ? "translate(0px, 2px) rotate(0deg)" : "translate(0px, 2px) rotate(180deg)";
    let moreOptions = document.getElementsByClassName('more-options')[0];
    moreOptions.classList.toggle('none');
}
// toggle(5);
function validateStep5() {
    toggle(5);
}
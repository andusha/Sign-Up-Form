"use strict";

const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword')

password.addEventListener('input', function() {
    this.value != confirmPassword.value ? confirmPassword.setCustomValidity('Password incorrect') : confirmPassword.setCustomValidity('')
    }
)
confirmPassword.addEventListener('input', function() {
    this.value != password.value ? this.setCustomValidity('Password incorrect') : this.setCustomValidity('')
    }
)
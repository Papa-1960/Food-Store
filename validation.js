// Function to validate the registration form
function validateRegistrationForm() {
    // Get form elements
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const address = document.getElementById('address');

    // Initialize an array to store error messages
    const errors = [];

    // Check if required fields are blank
    if (username.value === '') {
        errors.push('Username is required.');
    }

    if (password.value === '') {
        errors.push('Password is required.');
    } else if (password.value.length < 8) {
        errors.push('Password must be at least 8 characters long.');
    }

    if (email.value === '') {
        errors.push('Email is required.');
    }

    if (address.value === '') {
        errors.push('Address is required.');
    }

    // Display error messages or submit the form
    if (errors.length > 0) {
        // Display errors as inline text
        const errorContainer = document.getElementById('registration-errors');
        errorContainer.innerHTML = errors.join('<br>');
        return false; // Prevent form submission
    } else {
        return true; // Submit the form
    }
}

// Function to validate the order form
function validateOrderForm() {
    // Get form elements
    const deliveryAddress = document.getElementById('delivery-address');
    const billingAddress = document.getElementById('billing-address');
    const contactNumber = document.getElementById('contact-number');
    const creditCard = document.getElementById('credit-card');

    // Initialize an array to store error messages
    const errors = [];

    // Check if required fields are blank
    if (deliveryAddress.value === '' && document.querySelector('input[name="delivery"]:checked').value === 'delivery') {
        errors.push('Delivery address is required for delivery option.');
    }

    if (billingAddress.value === '') {
        errors.push('Billing address is required.');
    }

    if (contactNumber.value === '') {
        errors.push('Contact number is required.');
    }

    // Check if credit card length matches the selected payment method
    const paymentMethod = document.querySelector('select[name="payment-method"]').value;
    if (paymentMethod === 'pay-online' && creditCard.value.length !== 16) {
        errors.push('Credit card number must be 16 digits for online payment.');
    }

    // Display error messages or submit the form
    if (errors.length > 0) {
        // Display errors as inline text
        const errorContainer = document.getElementById('order-errors');
        errorContainer.innerHTML = errors.join('<br>');
        return false; // Prevent form submission
    } else {
        return true; // Submit the form
    }
}

// Add event listeners to the registration and order forms
const registrationForm = document.getElementById('registration-form');
const orderForm = document.getElementById('order-form');

if (registrationForm) {
    registrationForm.addEventListener('submit', function (event) {
        if (!validateRegistrationForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
}

if (orderForm) {
    orderForm.addEventListener('submit', function (event) {
        if (!validateOrderForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
}
// In your validation.js file
document.addEventListener("DOMContentLoaded", function () {
    const deliveryAddress = document.getElementById("delivery-address");
    const billingAddress = document.getElementById("billing-address");
    const sameAsDelivery = document.getElementById("same-as-delivery");

    sameAsDelivery.addEventListener("change", function () {
        if (sameAsDelivery.checked) {
            billingAddress.value = deliveryAddress.value;
        } else {
            billingAddress.value = ""; // Clear billing address if unchecked
        }
    });
});
// In your validation.js file
document.addEventListener("DOMContentLoaded", function () {
    const deliveryAddress = document.getElementById("delivery-address");
    const billingAddress = document.getElementById("billing-address");
    const sameAsDelivery = document.getElementById("same-as-delivery");

    sameAsDelivery.addEventListener("change", function () {
        if (sameAsDelivery.checked) {
            if (deliveryAddress.value.trim() === "") {
                alert("Please enter your delivery address first.");
                sameAsDelivery.checked = false;
            } else {
                billingAddress.value = deliveryAddress.value;
            }
        } else {
            billingAddress.value = "";
        }
    });
});
// In your validation.js file
document.addEventListener("DOMContentLoaded", function () {
    const creditCardType = document.getElementById("credit-card-type");
    const creditCardNumber = document.getElementById("credit-card-number");

    creditCardType.addEventListener("change", function () {
        const selectedType = creditCardType.value;
        if (selectedType === "visa" || selectedType === "mastercard") {
            creditCardNumber.maxLength = 16;
        } else if (selectedType === "amex") {
            creditCardNumber.maxLength = 15;
        }
    });
});

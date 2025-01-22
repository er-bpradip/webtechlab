$(document).ready(function() {

    // Custom rule for username (alphanumeric, 3-15 characters)
    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9]{3,15}$/.test(value);
    }, "Username must be alphanumeric and between 3 to 15 characters.");

    // Custom rule for password (at least 8 characters, 1 uppercase letter, and 1 number)
    $.validator.addMethod("strongPassword", function(value, element) {
        return this.optional(element) || /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }, "Password must be at least 8 characters long and contain at least 1 uppercase letter and 1 number.");

    // Custom rule for age (must be between 18 and 100)
    $.validator.addMethod("ageRange", function(value, element) {
        return this.optional(element) || (value >= 18 && value <= 100);
    }, "Age must be between 18 and 100.");

    // Form validation
    $('#customForm').validate({
        rules: {
            username: {
                required: true,
                alphanumeric: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                strongPassword: true
            },
            age: {
                required: true,
                ageRange: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            username: {
                required: "Please enter your username."
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email address."
            },
            password: {
                required: "Please provide a password."
            },
            age: {
                required: "Please enter your age."
            },
            message: {
                required: "Please enter a message.",
                minlength: "Message must be at least 10 characters long."
            }
        },
        submitHandler: function(form) {
            // Handle successful form submission
            $('#successMessage').text("Form submitted successfully!");
            form.reset();
        }
    });

});
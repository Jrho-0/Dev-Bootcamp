function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitButton").on("click", function() {
    var errorMessage = "";
    var fieldsMissing = "";

    if ($("#email").val() == "") {
        fieldsMissing += "<br>Email"
    }

    if ($("#phone").val() == "") {
        fieldsMissing += "<br>Telephone"

    }

    if ($("#password").val() == "") {
        fieldsMissing += "<br>Password"
    }
    if ($("#passwordConfirm").val() == "") {
        fieldsMissing += "<br>Confirm Password<br>"

    }

    if (fieldsMissing != "") {
        errorMessage += "The following field(s) are missing: " + fieldsMissing;
    }


    // Email validation
    if (!isEmail($("#email").val())) {
        errorMessage += "<p>Your email address is not valid!</p>";
    }

    // Phone number validation
    if (!$.isNumeric($("#phone").val())) {
        errorMessage += "<p>Your phone number is not numeric!</p><br>";
    }

    if ($("#password").val() != $("#passwordConfirm").val()) {
        errorMessage += "Your password don't match"
    }

    // Show error message if there's any
    if (errorMessage) {
        $("#errorMessage").html(errorMessage);
    } else {
        $("#successMessage").show();
        $("#errorMessage").hide();
        // alert("Form submitted successfully!");
    }
});

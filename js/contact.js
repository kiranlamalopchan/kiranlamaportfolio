function validateForm() {
    // Reset error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("message").innerHTML = "";

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validate name
    if (name === "") {
      document.getElementById("nameError").innerHTML = "Name is required";
      document.getElementById("name").style.border = "2px #bc4535 solid";
      return false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email address";
      return false;
    }

    // Display success message
    document.getElementById("successMessage").style.display = "block";

    // Prevent the form from actually submitting
    return false;
  }
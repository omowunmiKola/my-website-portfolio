
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-sub-head");

  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    // Clear old error messages
    const oldErrors = document.querySelectorAll(".error");
    oldErrors.forEach(e => e.remove());

    // Validate Name
    if (name.value.trim() === "") {
      showError(name, "Please enter your name.");
      valid = false;
    }

    // Validate Email
    if (!validateEmail(email.value)) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    }

    // Validate Message
    if (message.value.trim() === "") {
      showError(message, "Please enter a message.");
      valid = false;
    }
      if (valid) {
  event.preventDefault(); // prevent form submission
  alert("Your message has been sent! (Note: Form not connected to a backend)");
}

    if (!valid) {
      event.preventDefault(); // Stop form from submitting
    }
  });

  // Helper: Show error message
  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "0.9rem";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
  }

  // Helper: Validate email format
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.toLowerCase());
  }
    
});

// script.js
function validateForm() {
    let isValid = true;

    // Reset error messages
    document.querySelectorAll(".error-message").forEach((msg) => msg.style.display = "none");

    // Check each required field
    const fields = ["expel", "otherConditions", "medications", "therapy"];
    fields.forEach((field) => {
        const selectField = document.getElementById(field);
        const errorField = document.getElementById(field + "Error");

        if (selectField.value === "") {
            errorField.textContent = "This field is required.";
            errorField.style.display = "block";
            isValid = false;
        }
    });

    if (isValid) {
        // Simulating form submission
        document.getElementById("result").textContent = "Form submitted successfully!";
        document.getElementById("result").style.color = "#0047ab";
    }
}

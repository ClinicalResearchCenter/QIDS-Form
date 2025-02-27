// script.js

document.getElementById("qidsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;
    let totalScore = 0;
    
    // Reset previous error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");

    // List of question names corresponding to form elements
    const questionNames = [
        "fallingAsleep", "sleepDuringNight", "wakingEarly", "sleepingTooMuch",
        "feelingSad", "decreasedAppetite", "increasedAppetite", "decreasedWeight",
        "increasedWeight", "concentration"
        // Add more names if needed
    ];

    // Validate each field and calculate score
    questionNames.forEach(name => {
        const selectElement = document.querySelector(`select[name=${name}]`);
        if (!selectElement.value) {
            let errorElement = document.createElement("small");
            errorElement.className = "error-message";
            errorElement.textContent = "This field is required.";
            selectElement.parentNode.appendChild(errorElement);
            errorElement.style.display = "block";
            isValid = false;
        } else {
            totalScore += parseInt(selectElement.value);
        }
    });

    if (!isValid) {
        return; // Stop execution if form is invalid
    }

    // Determine depression severity based on total score
    let severity = "";
    if (totalScore >= 0 && totalScore <= 5) {
        severity = "No Depression";
    } else if (totalScore >= 6 && totalScore <= 10) {
        severity = "Mild Depression";
    } else if (totalScore >= 11 && totalScore <= 15) {
        severity = "Moderate Depression";
    } else if (totalScore >= 16 && totalScore <= 20) {
        severity = "Severe Depression";
    } else if (totalScore >= 21 && totalScore <= 27) {
        severity = "Very Severe Depression";
    }

    // Display the result
    document.getElementById("result").textContent = `Your Total Score: ${totalScore} (${severity})`;
});

document.getElementById("qidsForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let totalScore = 0;

    // Get highest score from Q1–Q4 (Sleep)
    const sleepScores = ["q1", "q2", "q3", "q4"].map(q => getScore(q));
    const sleepScore = Math.max(...sleepScores);

    // Q5 - Sad mood
    const sadMood = getScore("q5");

    // Get highest score from Q6–Q9 (Appetite/Weight)
    const appetiteScores = ["q6", "q7", "q8", "q9"].map(q => getScore(q));
    const appetiteScore = Math.max(...appetiteScores);

    // To be added later:
    // const psychomotorScores = ["q15", "q16"].map(q => getScore(q));
    // const psychomotorScore = Math.max(...psychomotorScores);

    // Sum up available scores
    totalScore = sleepScore + sadMood + appetiteScore;

    // Display severity based on total
    const severity = getSeverity(totalScore);

    document.getElementById("result").textContent =
        `Total Score: ${totalScore} (${severity})`;
});

// Helper to get score from radio buttons
function getScore(questionName) {
    const selected = document.querySelector(`input[name="${questionName}"]:checked`);
    return selected ? parseInt(selected.value) : 0;
}

// Scoring interpretation
function getSeverity(score) {
    if (score <= 5) return "No Depression";
    if (score <= 10) return "Mild Depression";
    if (score <= 15) return "Moderate Depression";
    if (score <= 20) return "Severe Depression";
    return "Very Severe Depression";
}

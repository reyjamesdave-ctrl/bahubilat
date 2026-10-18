
const form = document.getElementById("answerForm");
const answerInput = document.getElementById("answer");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const answer = answerInput.value.trim();

    // Answer option 1: Dili man
    if (answer.toLowerCase() === "dili man") {
        result.textContent = "Tantadooo";
    }

    // Answer option 2: Lab oi
    else if (answer.toLowerCase() === "lab oi") {
        result.textContent = "Tiya kaluod";
    }

    // If the answer does not match either option
    else {
        result.textContent = "Invalid answer!";
    }
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Attach an event listener to the form
    document.getElementById("group1_form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get the values entered by the user
        const question1 = document.getElementById("question1").value;
        const answer1 = document.getElementById("answer1").value;

        // Reference to the output paragraph
        const output1 = document.getElementById("try");

        // Check if the values match the correct criteria
        if (questionToAnswer.get(question1)  === answer1) {
            output1.style.color = "green"; // Change text color to green
            output1.innerText = "Success!";
            document.getElementById("question1").value = "";
            document.getElementById("answer1").value = "";
        }
        else {
            output1.style.color = "red"; // Change text color to red
            output1.innerText = "Wrong answer";
            document.getElementById("answer1").value = "";
        }
    });
});


// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Attach an event listener to the form
    document.getElementById("login").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get the values entered by the user
        const group = document.getElementById("group").value;
        const password = document.getElementById("password").value;

        // Reference to the output paragraph
        const output = document.getElementById("try");

        // Check if the values match the correct criteria
        if (group === "1" && password === "Popelka472") {
            output.style.color = "green"; // Change text color to green
            output.innerText = "Success!";
            window.location.href = "group1.html"
        }
        else if (group === "2" && password === "Rarasek189") {
            output.style.color = "green"; // Change text color to green
            output.innerText = "Success!";
        }
        else if (group === "3" && password === "Vseveda658") {
            output.style.color = "green"; // Change text color to green
            output.innerText = "Success!";
        }
        else if (group === "4" && password === "Brundibar735") {
            output.style.color = "green"; // Change text color to green
            output.innerText = "Success!";
        }
        else {
            output.style.color = "red"; // Change text color to red
            output.innerText = "Wrong Group or Password";
        }
    });
});

const questionToAnswer = new Map([
    ["1", "48"],
    ["2", "48"]
])

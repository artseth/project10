let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
// Set the test text
document.getElementById("inputText").value = testText;

// Reset user input and output
let userInput = document.getElementById("userInput");
userInput.value = "";
userInput.readOnly = false;
userInput.focus();

document.getElementById("output").innerHTML = "";

// Start timer
startTime = new Date().getTime();
}
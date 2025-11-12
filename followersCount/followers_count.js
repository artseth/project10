let count = 0;


function displayCount() {
    document.getElementById('countDisplay').innerText = count;

}

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); 
  checkCountValue();// Display the count
}

function checkCountValue() {
    if (count === 10) {
        alert ("Your Instagram account has gained 10 followers! Congratulations")

    } else if (count === 20){
        alert("You have gained 20 followers! Keep it up")
    }

}
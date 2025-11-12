let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is:${area}`;
}

let grocery1;
let grocery2;
let grocery3;



function totalAmount() {
    const total = Array.from({length: 3}, (_, i) => i + 1)
                      .reduce((sum, i) => sum + (parseFloat(document.getElementById(`grocery${i}`).value) || 0), 0);
    document.getElementById("totalResults").innerText = `The total amount is: ${total}`;
}
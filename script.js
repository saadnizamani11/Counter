// Get references to the counter and buttons
let counterElement = document.getElementById('counter');
let incrementButton = document.getElementById('increment');
let resetButton = document.getElementById('reset');
let decrimentButton = document.getElementById('decriment');

// Counter variable
let count = 0;

// Increment function
function increment() {
    count++;
    counterElement.textContent = count;
}
// decriment function
function decriment() {
    count--;
    counterElement.textContent = count;
}

// Reset function
function reset() {
    count = 0;
    counterElement.textContent = count;
}

// Add event listeners to buttons
incrementButton.addEventListener('click', increment);
resetButton.addEventListener('click', reset);
decrimentButton.addEventListener('click',decriment);
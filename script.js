const quantityInput = document.getElementById('quantity');
const numpadPopup = document.getElementById('order-card-numpad');

function showNumpad(event) {
    const inputRect = event.target.getBoundingClientRect();

    console.log('Before:', numpadPopup.classList.contains('show')); // Debugging

    // Add 'show' class to display the numpad
    numpadPopup.classList.add('show');

    // Dynamically position it next to the input field
    // numpadPopup.style.top = `${inputRect.top + window.scrollY}px`;
    // numpadPopup.style.left = `${inputRect.right + window.scrollX + 10}px`; 

    console.log('After:', numpadPopup.classList.contains('show')); // Debugging
}

function hideNumpad() {
    numpadPopup.classList.remove('show');
}

// Attach event listener to show the numpad when clicking the input field
quantityInput.addEventListener('click', showNumpad);

// Close numpad when clicking outside
// document.addEventListener('click', (event) => {
//     if (!event.target.closest('#quantity') && !event.target.closest('#order-card-numpad')) {
//         hideNumpad();
//     }
// });

// Function to append numbers to the input field
function appendToDisplay(value) {
    quantityInput.value += value;
}

// Function to clear the input field
function clearDisplay() {
    quantityInput.value = '';
}

// Hangman.js
function initializeHangman() {
    const hangmanDiv = document.querySelector('.hang');

    // Function to create an SVG directly
    function createSVG(src) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // Create an SVG element
        const img = document.createElement('image'); // Create an image element inside SVG
        img.setAttribute('href', src); // Set the image source
        img.setAttribute('width', '100%'); // Set width
        img.setAttribute('height', '100%'); // Set height
        svg.appendChild(img); // Append the image to the SVG
        return svg; // Return the SVG
    }

    // Create and append SVGs directly into the hangman div
    hangmanDiv.appendChild(createSVG('./assets/head.svg')); // Head
    hangmanDiv.appendChild(createSVG('./assets/body.svg')); // Body
    hangmanDiv.appendChild(createSVG('./assets/left-hand.svg')); // Left Hand
    hangmanDiv.appendChild(createSVG('./assets/right-hand.svg')); // Right Hand
    hangmanDiv.appendChild(createSVG('./assets/left-leg.svg')); // Left Leg
    hangmanDiv.appendChild(createSVG('./assets/right-leg.svg')); // Right Leg

    // Hide parts initially
    const bodyParts = hangmanDiv.querySelectorAll('svg'); // Select all SVGs in hangman div
    bodyParts.forEach(part => {
        part.style.display = "none"; 
    });

    // Define wrongGuesses outside the function
    let wrongGuesses = 0;

    // Function to draw hangman
    window.drawHangman = function() {
        if (wrongGuesses < bodyParts.length) {
            bodyParts[wrongGuesses].style.display = "block"; // Show the next part
            wrongGuesses++;
        } else {
            alert("Game Over");
        }
    };
}

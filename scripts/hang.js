let wrongGuesses = 0;

// defining body parts as an array of SVG elements created directly
const parts = [
    createSVG('./assets/head.svg', 'head'),
    createSVG('./assets/body.svg', 'body'),
    createSVG('./assets/left-hand.svg', 'left-hand'),
    createSVG('./assets/right-hand.svg', 'right-hand'),
    createSVG('./assets/left-leg.svg', 'left-leg'),
    createSVG('./assets/right-leg.svg', 'right-leg')
];

// function to create an SVG directly
function createSVG(src, className) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('class', className);
    return img;
}

function drawHangman() {

    console.log("Entered Function")
    const hangmanDiv = document.querySelector('.hang');
    hangmanDiv.appendChild(parts[wrongGuesses]);
    wrongGuesses++
    if (wrongGuesses == parts.length) {

        alert("Game Over")
        window.location.reload()
    }


}


let wrongGuesses = 0;

const parts = [
    createSVG('./assets/head.svg', 'head'),
    createSVG('./assets/body.svg', 'body'),
    createSVG('./assets/left-hand.svg', 'left-hand'),
    createSVG('./assets/right-hand.svg', 'right-hand'),
    createSVG('./assets/left-leg.svg', 'left-leg'),
    createSVG('./assets/right-leg.svg', 'right-leg')
];

function createSVG(src, className) {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('class', className);
    return img;
}

function drawHangman() {
    const hangmanDiv = document.querySelector('.hang');
    hangmanDiv.appendChild(parts[wrongGuesses]);
    wrongGuesses++
    if (wrongGuesses == parts.length) {

        alert("Game Over")
        window.location.reload()
    }


}


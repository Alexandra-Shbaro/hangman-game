let selectedWord; 
const lines = [];
const wrong_characters = []

function randomWord() {
    const words = ["LAPTOP", "KEYBOARD", "MOUSE", "VSCODE", "JAVASCRIPT", "FUNCTIONS", "ARRAYS", "SELECTOR"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

const container = document.querySelector('#answer-section'); 
selectedWord = randomWord();
console.log(`${selectedWord}`);

for (let i = 0; i < selectedWord.length; i++) {
    const line = document.createTextNode('_');
    container.appendChild(line);
    lines.push(line);
    container.appendChild(document.createTextNode(' ')); 
}

const letterElements = document.querySelectorAll('.letter');
letterElements.forEach(letter => {
    letter.addEventListener('click', () => {

        const clickedLetter = letter.textContent.trim();

        if (wrong_characters.includes(clickedLetter) && wrong_characters.length > 0) {
            alert("You already clicked this letter")
            return;
        }
        // checking if the letter clicked belongs to the word
        if (selectedWord.includes(clickedLetter)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === clickedLetter) {
                    lines[i].nodeValue = clickedLetter;
                }
            }
        } else {
            wrong_characters.push(clickedLetter)
            drawHangman();
        }

    });
});





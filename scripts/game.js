//sorry for the very detailed comments. im using them to make sure the information im learning along solving the assignment are being applied

let selectedWord; // var to store selected word 
const lines = []; //array to store lines 

//generating random words defined in an array 
function randomWord() {
    const words = ["LAPTOP", "KEYBOARD", "MOUSE", "VSCODE", "JAVASCRIPT", "FUNCTIONS", "ARRAYS", "SELECTOR"];
    const randomIndex = Math.floor(Math.random() * words.length);
    // math.random() * words.length => generates a decimal number, and words*length allows the generated number to correspond to the valid indicies in the array
    // math.floor => rounds the generates number so that it's not a decimal number
    return words[randomIndex];
}

//draw the lines for the word the user is guessing 
const container = document.querySelector('#answer-section'); //selecting the answer container
selectedWord = randomWord();
console.log(`${selectedWord}`); //only for debugging

// loop for generating lines according to the length of the randomly selected word
for (let i = 0; i < selectedWord.length; i++) {
    const line = document.createTextNode('_');
    container.appendChild(line);
    lines.push(line);
    container.appendChild(document.createTextNode(' ')); //just adding space between underscores
}

// making letters clickable and to appear upon clicking 
const letterElements = document.querySelectorAll('.letter');
letterElements.forEach(letter => {
    letter.addEventListener('click', () => {
        console.log(`Letter clicked: ${letter.textContent}`); // only for debugging

        const clickedLetter = letter.textContent.trim();// storing

        // checking if the letter clicked belongs to the word
        if (selectedWord.includes(clickedLetter)) {
            console.log(`the letter "${clickedLetter}" is in the word`);

            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === clickedLetter) {
                    console.log(`The letter "${clickedLetter}" is at index: ${i}`); // only for debugging
                    lines[i].nodeValue = clickedLetter;
                }
            }
        } else {
            console.log(`the letter "${clickedLetter}" is not in the word`); // only for debugging 
            drawHangman();
        }

    });
});





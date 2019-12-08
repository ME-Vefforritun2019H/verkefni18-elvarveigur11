//Html töggin
let htmlHiddenWord      = document.getElementById("hidden");
let htmlMessage         = document.getElementById("message");
let htmlLetterInput     = document.getElementById("letter");
let htmlWrongLetters    = document.getElementById("wrongLetters");


//Breytur
let displayHiddenWord    = "";
let displayWrongLetters  = "";



//arrray
let words = "";



//breytur
let randomNumber    = 0;
let randomWord      = 0;



//arrayar
let hiddenWord      = [];
let testedLetters   = [];
let wrongLetters    = [];



//hlustun
htmlLetterInput.addEventListener("keyup", checkLetter, false);



//finnur orð
if(randomWord === 0) {
    words = ["hundur","kartöflugeymsla","einbýlishús","hjónarúm","gíraffi"];

    randomNumber = Math.floor(Math.random() * words.length);

    randomWord = words[randomNumber];



    //undirstrikim
    for (let i = 0;i < randomWord.length; i++){
        hiddenWord.push("_");
        if(i === randomWord.length-1){
            displayHiddenWord = hiddenWord.toString();
            htmlHiddenWord.textContent = displayHiddenWord;
            console.log(hiddenWord);
            console.log(randomWord);
        }
    }
}



//hvert skipti slegið er inn staf
function checkLetter(){
    if (testedLetters.includes(htmlLetterInput.value)){
        htmlMessage.textContent = "Búin að prufa þennan staf";
        htmlLetterInput.value = "";
    }else {
        htmlMessage.textContent = "";
        testedLetters.push(htmlLetterInput.value);
        testedLetters.sort();
        if (randomWord.includes(htmlLetterInput.value)){
            for (let i=0;i<randomWord.length;i++){
                if (randomWord[i] === htmlLetterInput.value){
                    hiddenWord[i] = htmlLetterInput.value;
                }
                if (i === hiddenWord.length-1){
                    displayHiddenWord = hiddenWord.toString();
                    htmlHiddenWord.textContent = displayHiddenWord;
                    htmlLetterInput.value = "";
                }
            }
        }else {
            wrongLetters.push(htmlLetterInput.value);
            wrongLetters.sort();
            displayWrongLetters = wrongLetters.toString();
            htmlWrongLetters.textContent = displayWrongLetters;
            htmlLetterInput.value = "";

        }
    }
}
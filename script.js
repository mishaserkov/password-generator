const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLengthRange = document.querySelector("#password-length-range");
let passwordLengthValue = document.querySelector("#password-length-value");

passwordLengthRange.addEventListener('input', () => {
    passwordLengthValue.value = passwordLengthRange.value;
})

let symbolsToggle = document.querySelector("#symbols-toggle");
let numbersToggle = document.querySelector("#numbers-toggle");

let hasSymbols = symbolsToggle.checked;
let hasNumbers = numbersToggle.checked;

symbolsToggle.addEventListener('input', () => {
    hasSymbols = symbolsToggle.checked;
});

numbersToggle.addEventListener('input', () => {
    hasNumbers = numbersToggle.checked;
});

let passwordOne = document.querySelector("#password-one");
let passwordTwo = document.querySelector("#password-two");

passwordOne.addEventListener('click', () => copyToClipboard(passwordOne.textContent));
passwordTwo.addEventListener('click', () => copyToClipboard(passwordTwo.textContent));

function copyToClipboard(password) {
    if(passwordOne.textContent && passwordTwo.textContent) {
        navigator.clipboard.writeText(password)
        .then(() => {
            alert("Пароль успешно скопирован!");
        })
        .catch(err => {
            console.error("Ошибка копирования пароля:", err);
        });
    }
}

function generatePassword() {
    let filteredCharacters = "";

    let generatedPasswordOne = "";
    let generatedPasswordTwo = "";

    if (hasSymbols && !hasNumbers) {
        filteredCharacters = characters.filter(char => /\D/.test(char));
    } else if (!hasSymbols && hasNumbers) {
        filteredCharacters = characters.filter(char => /[a-zA-Z0-9]/.test(char));
    } else if (!hasSymbols && !hasNumbers) {
        filteredCharacters = characters.filter(char => /[a-zA-Z]/.test(char));
    } else {
        filteredCharacters = characters;
    }

    for(i = 0; i < passwordLengthValue.value; i++) {
        generatedPasswordOne += filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)]
        generatedPasswordTwo += filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)]
    }
    
    passwordOne.textContent = generatedPasswordOne;
    passwordTwo.textContent = generatedPasswordTwo;
}

/*
Stretch goals:
- Ability to set password length +
- Add "copy-on-click" +
- Toggle "symbols" and "numbers on/off" +
*/





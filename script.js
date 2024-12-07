const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLengthRange = document.querySelector("#password-length-range");
let passwordLengthValue = document.querySelector("#password-length-value");

passwordLengthRange.addEventListener("input", () => {
    passwordLengthValue.value = passwordLengthRange.value;
});


// let passwordOne = document.querySelector("#password-one");
// let passwordTwo = document.querySelector("#password-two");

// function generatePassword() {
//     let generatedPasswordOne = "";
//     let generatedPasswordTwo = "";

//     for(i = 0; i < 15; i++) {
//         generatedPasswordOne += characters[Math.floor(Math.random() * characters.length)]
//         generatedPasswordTwo += characters[Math.floor(Math.random() * characters.length)]
//     }
    
//     passwordOne.textContent = generatedPasswordOne;
//     passwordTwo.textContent = generatedPasswordTwo;
// }

/*
Stretch goals:
- Ability to set password length
- Add "copy-on-click"
- Toggle "symbols" and "numbers on/off"
*/





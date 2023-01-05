let scale = document.querySelector(".range");
const passwdBaseNum = '0123456789';
const passwdBaseAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwdBaseaz ='abcdefghijklmnopqrstuvwxyz';
const passwdBaseSpec = '!"#$%&()*+,-./:;<=?@[]\^_`{|}~';
const warning = document.querySelector(".warning");
const generateBtn = document.querySelector(".generate");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");

//Checkbox options
const Upper = document.querySelector(".Uppercase");
const Lower = document.querySelector(".Lowercase");
const Nums = document.querySelector(".Numbers");
const Symbols = document.querySelector(".Special-characters");


//Function to display password length based on user`s scale
passwdLength = document.querySelector('.char-password');
passwdLength.innerHTML = scale.value;
    
scale.addEventListener('input', function () {
  passwdLength.innerHTML = scale.value;
}, false);

// Function to generate password
function generatePasswd() {
    let password = '';
    let passwdBase = '';
    for (let i = 0; i <= scale.value; i++) {
        //   IFs to set a string to generate password from
        if (Upper.checked === true) {
            passwdBase = passwdBaseAZ;
        }
        if (Lower.checked === true) {
            passwdBase = passwdBaseaz;
        }
        if (Nums.checked === true) {
            passwdBase = passwdBaseNum;
        }
        if (Symbols.checked === true) {
            passwdBase = passwdBaseSpec;
        }
        if (Upper.checked === true && Lower.checked === true) {
            passwdBase = passwdBaseAZ+passwdBaseaz;
        }
        if (Upper.checked === true && Nums.checked === true) {
            passwdBase = passwdBaseAZ+passwdBaseNum;
        }
        if (Upper.checked === true && Symbols.checked === true) {
            passwdBase = passwdBaseAZ+passwdBaseSpec;
        }
        if (Lower.checked === true && Nums.checked === true) {
            passwdBase = passwdBaseaz+passwdBaseNum;
        }
        if (Lower.checked === true && Symbols.checked === true) {
            passwdBase = passwdBaseaz+passwdBaseSpec;
        }
        if (Nums.checked === true && Symbols.checked === true) {
            passwdBase = passwdBaseNum+passwdBaseSpec;
        }
         if (Upper.checked === true && Lower.checked === true && Nums.checked === true) {
            passwdBase = passwdBaseAZ+passwdBaseaz+passwdBaseNum;
        }
         if (Upper.checked === true && Lower.checked === true && Symbols.checked === true) {
            passwdBase = passwdBaseAZ+passwdBaseaz+passwdBaseSpec;
        }
         if (Upper.checked === true && Nums.checked === true && Symbols.checked === true) {
            passwdBase = passwdBaseAZ+passwdBaseNum+passwdBaseSpec;
        }
         if (Lower.checked === true && Nums.checked === true && Symbols.checked === true) {
            passwdBase = passwdBaseaz+passwdBaseNum+passwdBaseSpec;
        }
       if (Upper.checked === true && Lower.checked === true && Nums.checked === true
            && Symbols.checked === true) {
            passwdBase = passwdBaseAZ+passwdBaseaz+passwdBaseNum+passwdBaseSpec;
        }
       if (Upper.checked === false && Lower.checked === false && Nums.checked === false
            && Symbols.checked === false) {
           warning.classList.add("warning-activate");
            setTimeout(removeWarning, 1500);
        }
        let random = Math.floor(Math.random() * passwdBase.length);
        password += passwdBase.substring(random, random + 1);
        
    }
    document.querySelector(".gen-passwd").value = password;

}
function removeWarning() {
warning.classList.remove("warning-activate")
}
const generator = document.querySelector(".generate-btn");
generator.addEventListener("click", generatePasswd);

// Function to display Strong-Medium-Weak password check
function checkPasswd() {    
    if (passwdLength.innerHTML > 12) {
        strong.classList.replace('strong','strong-check');
    }
    if (passwdLength.innerHTML <= 12 && passwdLength.innerHTML > 6) {
        medium.classList.replace('medium','medium-check');
    }
    if (passwdLength.innerHTML <= 6) {
        weak.classList.replace('weak','weak-check');
    }
}
generator.addEventListener("click", checkPasswd);

// Function to activate COPY button
function copyPasswd() {
    let copyText = document.querySelector(".gen-passwd")    ;
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}
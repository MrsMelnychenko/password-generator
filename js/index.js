let scale = document.querySelector(".range");
const passwdBaseNum = '0123456789';
const passwdBaseAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwdBaseaz ='abcdefghijklmnopqrstuvwxyz';
const passwdBaseSpec = '!"#$%&()*+,-./:;<=?@[]\^_`{|}~';

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
    // debugger;
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
      
        let random = Math.floor(Math.random() * passwdBase.length);
        password += passwdBase.substring(random, random + 1);
        
    }
    document.querySelector(".gen-passwd").value = password;

}

const generator = document.querySelector(".generate-btn");
generator.addEventListener("click", generatePasswd);
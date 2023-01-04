let scale = document.querySelector(".range");
const passwdBaseNum = '0123456789';
const passwdBaseAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwdBaseaz ='abcdefghijklmnopqrstuvwxyz';
const passwdBaseSpec = '!"#$%&()*+,-./:;<=?@[]\^_`{|}~';
let password = '';

//Function to display password length based on user`s scale
passwdLength = document.querySelector('.char-password');
passwdLength.innerHTML = scale.value;
    
scale.addEventListener('input', function () {
  passwdLength.innerHTML = scale.value;
}, false);


const captcha = document.querySelector(".captcha"),
refreshBtn = document.querySelector(".refresh-btn"),
inputField = document.querySelector(".input"),
checkBtn = document.querySelector(".check-btn"),
checkStatus = document.querySelector(".check-status");


let allCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                     'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                     'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getCaptcha(){
    for (let i = 0; i < 6; i++) {
        let randonCaptcha = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randonCaptcha}`;
    }
}

getCaptcha();

refreshBtn.addEventListener("click", ()=> {
    captcha.innerText = "";
    getCaptcha();
});

checkBtn.addEventListener("click", e => {
    e.preventDefault();
    checkStatus.style.display = "block";
    let inputValue = inputField.value.split('').join(' ');
    if(inputValue == captcha.innerText){
        checkStatus.innerText = "Nice! you doesn't look like a robot to me, go foreward";
        checkStatus.style.color = "#4db2ec"
    }else{
        checkStatus.innerText = "Let's try again!";
        checkStatus.style.color = "#ff0000"
    }
    
});


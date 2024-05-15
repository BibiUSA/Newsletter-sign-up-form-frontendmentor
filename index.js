const email = document.querySelector("#email");
const button = document.querySelectorAll(".button");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".thanks");
const emailRequired = document.querySelector(".email-required");
const yourEmail = document.querySelector("#your-email");
console.log(yourEmail.innerHTML);


let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
for (let i=0; i < button.length;i++){
button[i].addEventListener("click", function(){
    if(email.value.match(emailFormat)){
        firstPage.classList.toggle("hidden");
        secondPage.classList.toggle("hidden");
        emailRequired.classList.add("hidden");
        email.classList.remove("wrong");
        yourEmail.innerHTML = email.value;
    } else{
        emailRequired.classList.remove("hidden");
        email.classList.add("wrong");
    }
})
}
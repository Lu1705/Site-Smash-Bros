"use strict";

document.addEventListener("DOMContentLoaded", function() {
    //Obtient les références de l'icone du Menu burger et du menu de navigation
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    // Ajoute un écouteur d'événement au clic sur l'icone du menu burger
    burgerIcon.addEventListener('click' ,function(){
        // bascule la classe 'active' pour afficher/masquer le menu de navigation
        menu.classList.toggle('active');
    });
}); 

let passwordInput=document.getElementById("password"); //nous récupérons la valeur du password
function ValidatePassword(){ // et créons une fonction pour vérifier sa validité

    let passwordError = document.getElementById('mdpError');

    // Expression régulière pour vérifier la présence d'au moins une majuscule, une minuscule et un caractère spécial
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    if(passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 8){// si le mot de passe ne contion pas au moins une majuscule, 8 caractère et un caractère spéciale il n'est pas valide 
        passwordError.textContent = ""
    } else { //s'il n'est pas valide le message ci dessous va s'afficher
        passwordError.textContent = "Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.";
    }
}
passwordInput.addEventListener("input" ,ValidatePassword); //nous appliquons cette fonction au password et l'évènement déclancheur est l'input


let body=document.querySelector("body"); // nous mettons en place le même darkmode que sur la page principale
let btd=document.querySelector("#darkmode");

let x = 0;

function darkmod(){
    if(x==0){
        body.style.background="#333";
        body.style.color="white"
        x=1;
    } else {
        body.style.background="white";
        body.style.color="#333"
        x=0
    }
}

btd.addEventListener('click' ,darkmod);


let pseudo=document.querySelector("#pseudo"); //nous créons un ensemble de variable chargées de récupérer les valeurs enregistrées par l'utilisateur
console.log(pseudo);
let mail=document.querySelector('#mail');
console.log(mail);
let mdp=document.querySelector('#password');
console.log(mdp)
let nom=document.querySelector("#nom");
console.log(nom);
let prenom=document.querySelector('#prenom');
console.log(prenom);
let pays=document.querySelector('#pays');
console.log(pays);
let genre=document.querySelector('#genre');
console.log(genre);
let main=document.querySelector("#main");
console.log(main);
let second=document.querySelector("#second");
console.log(second);
let third=document.querySelector("#third");
console.log(third);


let bt=document.querySelector('#submit'); //nous créons un bouton correspondant a l'input submit

document.querySelector('.hide').hidden = true; // et nous cachons la phrase de confirmation

function check(e){
    e.preventDefault(); // nous faisons en sorte que la page ne se recharge pas lorsque l'on envoie nos réponse
    let pseudoValue=pseudo.value; //et nous vérifions la récupération de chaque valeurrs
    console.log(pseudoValue);
    let mailValue=mail.value;
    console.log(mailValue);
    let mdpValue=mdp.value;
    console.log(mdpValue);
    let nomValue=nom.value;
    console.log(nomValue);
    let prenomValue=prenom.value;
    console.log(prenomValue);
    let paysValue=pays.value;
    console.log (paysValue);
    let genreValue=genre.value;
    console.log(genreValue);
    let mainValue=main.value;
    console.log(mainValue);
    let secondValue=second.value;
    console.log(secondValue);
    let thirdValue=third.value;
    console.log(thirdValue);

    
    document.querySelector('.hide').hidden = false; //puis nous faisons apparaitre le message de confirmation
}

bt.addEventListener('click' ,check); // et appliquons cette fonction au bouton submit

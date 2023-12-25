"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    burgerIcon.addEventListener('click' ,function(){
        menu.classList.toggle('active');
    });
}); 

let body=document.querySelector("body"); // nous créons une variable body que l'on fera correspondre au background de la page pour le dark mode
let bt=document.querySelector("button");//ainsi qu'une variable correspondante au bouton darkmode 

let x=0;

function darkmod(){//par défaut la site et en blanc de même que la variable X
    if(x==0){//si X égale a 0 alors le fond se change en noir et les écriture en blanc
        body.style.background="#333";
        body.style.color="white"
        x=1; // on change la valeur de X pour la réciproque 
    } else { // si X n'est pas égale a 0 alors on revient a la position initiale
        body.style.background="white";
        body.style.color="#333"
        x=0
    }
}

bt.addEventListener('click' ,darkmod); // cette fonction se déclenche lorsque l'on appui sur bt qui correspond au bouton darkmod

function tourneImageNoe(){ //on créé une fonction pour changer l'icone du personnage
    let monImage=document.getElementById("premierCarousel").getAttribute('src');//on crréé une variable qui a pour attribu le src de l'icone du personnage
    console.log(monImage);
    switch(monImage){// on met en place un switch pour définir différent cas de figure
        case 'img/icon smash/CloudHeadSSBU.webp': // si l'image correspond a cloud , alors on l'a change en mario
            document.getElementById('premierCarousel').src='img/icon smash/MarioHeadWhiteSSBU.webp';//on change le src pour changer l'image
            break;//on spécifie que ce cas de figure est terminé
        case 'img/icon smash/MarioHeadWhiteSSBU.webp'://on recommence autant de fois qu'il faut changer l'image
            document.getElementById('premierCarousel').src='img/icon smash/BowserHeadSSBU.webp';
            break;
        case 'img/icon smash/BowserHeadSSBU.webp' :
            document.getElementById('premierCarousel').src='img/icon smash/CloudHeadSSBU.webp';
            break;
    }
}

let btNoe=document.getElementById('premierCarousel'); // On créé un bouton spécifique a ce carousel
console.log(btNoe);
btNoe.addEventListener("click" ,tourneImageNoe);// et on associe cette fonction au nouveau bouton

function tourneImageRaph(){ // on reproduit cette démarche pour chaque joueur
    let monImage=document.getElementById("deuxiemeCarousel").getAttribute('src');
    console.log(monImage);
    switch(monImage){
        case 'img/icon smash/Pac-ManHeadSSBU.webp' :
            document.getElementById("deuxiemeCarousel").src='img/icon smash/WolfHeadSSBU.webp';
            break;
        case 'img/icon smash/WolfHeadSSBU.webp' :
            document.getElementById('deuxiemeCarousel').src='img/icon smash/WarioHeadClassicSSBU.webp';
            break;
        case 'img/icon smash/WarioHeadClassicSSBU.webp':
            document.getElementById('deuxiemeCarousel').src='img/icon smash/Pac-ManHeadSSBU.webp';
            break;
    }
}

let btRaph=document.getElementById('deuxiemeCarousel');
console.log(btRaph);
btRaph.addEventListener('click' ,tourneImageRaph);

function tourneImageRomain(){
    let monImage=document.getElementById("troisiemeCarousel").getAttribute('src');
    console.log(monImage);
    switch(monImage){
        case 'img/icon smash/KazuyaHeadSSBU.webp' :
            document.getElementById("troisiemeCarousel").src='img/icon smash/SephirothHeadSSBU.webp';
            break;
        case 'img/icon smash/SephirothHeadSSBU.webp' :
            document.getElementById('troisiemeCarousel').src='img/icon smash/MetaKnightHeadSSBU.webp';
            break;
        case 'img/icon smash/MetaKnightHeadSSBU.webp':
            document.getElementById('troisiemeCarousel').src='img/icon smash/KazuyaHeadSSBU.webp';
            break;
    }
}

let btRomain=document.getElementById('troisiemeCarousel');
console.log(btRomain);
btRomain.addEventListener('click' ,tourneImageRomain);


function tourneImageLu(){
    let monImage=document.getElementById("quatreCarousel").getAttribute('src');
    console.log(monImage);
    switch(monImage){
        case 'img/icon smash/JigglypuffHeadSSBU.webp' :
            document.getElementById("quatreCarousel").src='img/icon smash/LittleMacHeadWireSSBU.webp';
            break;
        case 'img/icon smash/LittleMacHeadWireSSBU.webp' :
            document.getElementById('quatreCarousel').src='img/icon smash/SheikHeadSSBU.webp';
            break;
        case 'img/icon smash/SheikHeadSSBU.webp':
            document.getElementById('quatreCarousel').src='img/icon smash/WarioHeadClassicSSBU.webp';
            break;
        case 'img/icon smash/WarioHeadClassicSSBU.webp':
            document.getElementById('quatreCarousel').src='img/icon smash/FalcoHeadSSBU.webp';
            break;
            case 'img/icon smash/FalcoHeadSSBU.webp':
                document.getElementById('quatreCarousel').src='img/icon smash/IncineroarHeadSSBU.webp';
                break;
        case 'img/icon smash/IncineroarHeadSSBU.webp':
            document.getElementById('quatreCarousel').src='img/icon smash/JigglypuffHeadSSBU.webp';
            break;
    }
}

let btLu=document.getElementById('quatreCarousel');
console.log(btLu);
btLu.addEventListener('click' ,tourneImageLu);

function tourneImageAlexis(){
    let monImage=document.getElementById("cinqCarousel").getAttribute('src');
    console.log(monImage);
    switch(monImage){
        case 'img/icon smash/TerryHeadSSBU.webp' :
            document.getElementById("cinqCarousel").src='img/icon smash/CaptainFalconHeadSSBU.webp';
            break;
        case 'img/icon smash/CaptainFalconHeadSSBU.webp' :
            document.getElementById('cinqCarousel').src='img/icon smash/IncineroarHeadSSBU.webp';
            break;
        case 'img/icon smash/IncineroarHeadSSBU.webp':
            document.getElementById('cinqCarousel').src='img/icon smash/SephirothHeadSSBU.webp';
            break;
        case 'img/icon smash/SephirothHeadSSBU.webp':
            document.getElementById('cinqCarousel').src='img/icon smash/TerryHeadSSBU.webp';
            break;
    }
}

let btAlexis=document.getElementById('cinqCarousel');
console.log(btAlexis);
btAlexis.addEventListener('click' ,tourneImageAlexis);

function tourneImageTom(){
    let monImage=document.getElementById("sixCarousel").getAttribute('src');
    console.log(monImage);
    switch(monImage){
        case 'img/icon smash/RoyHeadSSBU.webp' :
            document.getElementById("sixCarousel").src='img/icon smash/FalcoHeadSSBU.webp';
            break;
        case 'img/icon smash/FalcoHeadSSBU.webp' :
            document.getElementById('sixCarousel').src='img/icon smash/JigglypuffHeadSSBU.webp';
            break;
        case 'img/icon smash/JigglypuffHeadSSBU.webp':
            document.getElementById('sixCarousel').src='img/icon smash/RoyHeadSSBU.webp';
            break;
    }
}

let btTom=document.getElementById('sixCarousel');
console.log(btTom);
btTom.addEventListener('click' ,tourneImageTom);


function tourneImageGab(){
    let monImage=document.getElementById("septCarousel").getAttribute('src');
    console.log(monImage);
    switch(monImage){
        case 'img/icon smash/LinkHeadSSBU.webp' :
            document.getElementById("septCarousel").src='img/icon smash/ToonLinkHeadSSBU.webp';
            break;
        case 'img/icon smash/ToonLinkHeadSSBU.webp' :
            document.getElementById('septCarousel').src='img/icon smash/YoungLinkHeadSSBU.webp';
            break;
        case 'img/icon smash/YoungLinkHeadSSBU.webp':
            document.getElementById('septCarousel').src='img/icon smash/LinkHeadSSBU.webp';
            break;
    }
}

let btGab=document.getElementById('septCarousel');
console.log(btGab);
btGab.addEventListener('click' ,tourneImageGab);


function tourneImageAnt(){
    let monImage=document.getElementById("huitCarousel").getAttribute('src');
    console.log(monImage);
    switch(monImage){
        case 'img/icon smash/PiranhaPlantHeadSSBU.webp' :
            document.getElementById("huitCarousel").src='img/icon smash/CaptainFalconHeadSSBU.webp';
            break;
        case 'img/icon smash/CaptainFalconHeadSSBU.webp' :
            document.getElementById('huitCarousel').src='img/icon smash/JigglypuffHeadSSBU.webp';
            break;
        case 'img/icon smash/JigglypuffHeadSSBU.webp':
            document.getElementById('huitCarousel').src='img/icon smash/PiranhaPlantHeadSSBU.webp';
            break;
    }
}

let btAnt=document.getElementById('huitCarousel');
console.log(btAnt);
btAnt.addEventListener('click' ,tourneImageAnt);


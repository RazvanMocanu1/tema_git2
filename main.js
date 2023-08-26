const BunVenit = document.getElementById("BunVenit");
const buttonComandaBurger = document.getElementById("buttonComandaBurger");
const buttonComandaPizza = document.getElementById("buttonComandaPizza");
const buttonComandaSpaghetti = document.getElementById("buttonComandaSpaghetti");
const burger = document.getElementById("burgerImagine");
const pizza = document.getElementById("pizzaImagine");
const spaghetti = document.getElementById("spaghettiImagine");
const Pburger = document.getElementById("burgerh1");
const Ppizza = document.getElementById("pizzah1");
const Pspaghetti = document.getElementById("spaghettih1");

buttonComandaBurger.style.display="none";
buttonComandaPizza.style.display="none";
buttonComandaSpaghetti.style.display="none";

function burger1 (){

    burger.style.display="none";
    Pburger.innerText="Pret : 23.50 lei";
    pizza.style.display="none"
    spaghetti.style.display="none"
    BunVenit.style.display="none"
    buttonComandaBurger.style.display="";

}

burger.addEventListener("click", burger1);

function pizza1 (){

    pizza.style.display="none";
    Ppizza.innerText="Pret : 28 lei";
    burger.style.display="none"
    spaghetti.style.display="none"
    BunVenit.style.display="none"
    buttonComandaPizza.style.display="";

}

pizza.addEventListener("click", pizza1);

function spaghetti1 (){

    spaghetti.style.display="none";
    Pspaghetti.innerText="Pret : 19.99 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaSpaghetti.style.display="";

}

spaghetti.addEventListener("click", spaghetti1);
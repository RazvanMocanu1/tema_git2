const burger = document.getElementById("burger1");
const pizza = document.getElementById("pizza1");
const spaghetti = document.getElementById("spaghetti1");
const Pburger = document.getElementById("burgerh1");
const Ppizza = document.getElementById("pizzah1");
const Pspaghetti = document.getElementById("spaghettih1");

function burger1 (){

    burger.style.display="none";
    Pburger.innerText="Pret : 23.50 lei";

}

burger.addEventListener("click", burger1);

function pizza1 (){

    pizza.style.display="none";
    Ppizza.innerText="Pret : 28 lei";

}

pizza.addEventListener("click", pizza1);

function spaghetti1 (){

    spaghetti.style.display="none";
    Pspaghetti.innerText="Pret : 19.99 lei"

}

spaghetti.addEventListener("click", spaghetti1);
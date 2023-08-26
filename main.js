const BunVenit = document.getElementById("BunVenit");

const buttonComandaBurger = document.getElementById("buttonComandaBurger");
const buttonComandaBurrito = document.getElementById("buttonComandaBurrito");
const buttonComandaPizza = document.getElementById("buttonComandaPizza");
const buttonComandaSpaghetti = document.getElementById("buttonComandaSpaghetti");

const comandaAmplasata = document.getElementById("comenziAmplasate");
const pretTotal = document.getElementById("pretTotal");

const burger = document.getElementById("burgerImagine");
const burrito = document.getElementById("burritoImagine");
const pizza = document.getElementById("pizzaImagine");
const spaghetti = document.getElementById("spaghettiImagine");

const Pburger = document.getElementById("burgerh1");
const Pburrito = document.getElementById("burritoh1");
const Ppizza = document.getElementById("pizzah1");
const Pspaghetti = document.getElementById("spaghettih1");
let numar = 1;
let bani = 0;

buttonComandaBurger.style.display="none";
buttonComandaBurrito.style.display="none";
buttonComandaPizza.style.display="none";
buttonComandaSpaghetti.style.display="none";

function burger1 (){

    burger.style.display="none";
    burrito.style.display="none";
    Pburger.innerText="Burger Max " + ", Pret : 23.50 lei";
    pizza.style.display="none";
    spaghetti.style.display="none";
    BunVenit.style.display="none";
    pretTotal.style.display="none";
    buttonComandaBurger.style.display="";
    comandaAmplasata.style.display="none";

}

burger.addEventListener("click", burger1);

function functiiComandaBurger (){

    burger.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    spaghetti.style.display="";
    BunVenit.style.display="";
    buttonComandaBurger.style.display="none";
    Pburger.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 23.50
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaBurger.addEventListener("click", functiiComandaBurger);

function burrito1 (){

    burger.style.display="none";
    burrito.style.display="none";
    Pburrito.innerText="Burrito Mexican " + ", Pret : 22.90 lei";
    pizza.style.display="none";
    spaghetti.style.display="none";
    BunVenit.style.display="none";
    pretTotal.style.display="none";
    buttonComandaBurrito.style.display="";
    comandaAmplasata.style.display="none";

}

burrito.addEventListener("click", burrito1);

function functiiComandaBurrito (){

    burger.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    spaghetti.style.display="";
    BunVenit.style.display="";
    buttonComandaBurrito.style.display="none";
    Pburrito.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 22.90
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaBurrito.addEventListener("click", functiiComandaBurrito);

function pizza1 (){

    pizza.style.display="none";
    burrito.style.display="none";
    Ppizza.innerText="Pizza Peperoni " + ", Pret : 28 lei";
    burger.style.display="none"
    spaghetti.style.display="none"
    BunVenit.style.display="none"
    buttonComandaPizza.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

pizza.addEventListener("click", pizza1);

function functiiComandaPizza (){

    burger.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    spaghetti.style.display="";
    BunVenit.style.display="";
    buttonComandaPizza.style.display="none";
    Ppizza.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 28
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaPizza.addEventListener("click", functiiComandaPizza);


function spaghetti1 (){

    spaghetti.style.display="none";
    burrito.style.display="none";
    Pspaghetti.innerText="Paste Carbonara " + ", Pret : 19.99 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaSpaghetti.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

spaghetti.addEventListener("click", spaghetti1);

function functiiComandaSpaghetti (){

    burger.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    spaghetti.style.display="";
    BunVenit.style.display="";
    buttonComandaSpaghetti.style.display="none";
    Pspaghetti.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 19.99
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaSpaghetti.addEventListener("click", functiiComandaSpaghetti);



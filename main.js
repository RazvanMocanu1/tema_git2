const BunVenit = document.getElementById("BunVenit");

const buttonComandaBurger = document.getElementById("buttonComandaBurger");
const buttonComandaBurrito = document.getElementById("buttonComandaBurrito");
const buttonComandaPizza = document.getElementById("buttonComandaPizza");
const buttonComandaSpaghetti = document.getElementById("buttonComandaSpaghetti");
const buttonComandaMiciCuCartofi = document.getElementById("buttonComandaMiciCuCartofi");
const buttonComandaClatite = document.getElementById("buttonComandaClatite");
const buttonComandaRamen = document.getElementById("buttonComandaRamen");
const buttonComandaSarmale = document.getElementById("buttonComandaSarmale");
const buttonComandaShaorma = document.getElementById("buttonComandaShaorma");
const buttonComandaTaco = document.getElementById("buttonComandaTaco");

const comandaAmplasata = document.getElementById("comenziAmplasate");
const pretTotal = document.getElementById("pretTotal");

const burger = document.getElementById("burgerImagine");
const burrito = document.getElementById("burritoImagine");
const pizza = document.getElementById("pizzaImagine");
const spaghetti = document.getElementById("spaghettiImagine");
const miciCuCartofi = document.getElementById("miciCuCartofiImagine");
const clatite = document.getElementById("clatiteImagine");
const ramen = document.getElementById("ramenImagine");
const sarmale = document.getElementById("sarmaleImagine");
const shaorma = document.getElementById("shaormaImagine");
const taco = document.getElementById("tacoImagine");

const Pburger = document.getElementById("burgerh1");
const Pburrito = document.getElementById("burritoh1");
const Ppizza = document.getElementById("pizzah1");
const Pramen = document.getElementById("ramenh1");
const Pspaghetti = document.getElementById("spaghettih1");
const PmiciCuCartofi = document.getElementById("miciCuCartofih1");
const Pclatite = document.getElementById("clatiteh1");
const Psarmale = document.getElementById("sarmaleh1");
const Pshaorma = document.getElementById("shaormah1");
const Ptaco = document.getElementById("tacoh1");

let numar = 1;
let bani = 0;

buttonComandaBurger.style.display="none";
buttonComandaBurrito.style.display="none";
buttonComandaPizza.style.display="none";
buttonComandaSpaghetti.style.display="none";
buttonComandaMiciCuCartofi.style.display="none";
buttonComandaClatite.style.display="none";
buttonComandaRamen.style.display="none";
buttonComandaSarmale.style.display="none";
buttonComandaShaorma.style.display="none";
buttonComandaTaco.style.display="none";

function burger1 (){

    burger.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    clatite.style.display="none";
    Pburger.innerText="Burger Max " + ", Pret : 23.50 lei";
    pizza.style.display="none";
    spaghetti.style.display="none";
    miciCuCartofi.style.display="none";
    BunVenit.style.display="none";
    pretTotal.style.display="none";
    buttonComandaBurger.style.display="";
    comandaAmplasata.style.display="none";

}

burger.addEventListener("click", burger1);

function functiiComandaBurger (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    ramen.style.display="";
    clatite.style.display="";
    pizza.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
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
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    clatite.style.display="none";
    Pburrito.innerText="Burrito Mexican " + ", Pret : 22.90 lei";
    pizza.style.display="none";
    spaghetti.style.display="none";
    miciCuCartofi.style.display="none";
    BunVenit.style.display="none";
    pretTotal.style.display="none";
    buttonComandaBurrito.style.display="";
    comandaAmplasata.style.display="none";

}

burrito.addEventListener("click", burrito1);

function functiiComandaBurrito (){

    burger.style.display="";
    ramen.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    clatite.style.display="";
    pizza.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
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
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    burrito.style.display="none";
    ramen.style.display="none";
    clatite.style.display="none";
    Ppizza.innerText="Pizza Peperoni " + ", Pret : 28 lei";
    burger.style.display="none"
    spaghetti.style.display="none"
    miciCuCartofi.style.display="none";
    BunVenit.style.display="none"
    buttonComandaPizza.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

pizza.addEventListener("click", pizza1);

function functiiComandaPizza (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    ramen.style.display="";
    burrito.style.display="";
    clatite.style.display="";
    pizza.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
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
    ramen.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    miciCuCartofi.style.display="none";
    clatite.style.display="none";
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
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    ramen.style.display="";
    pizza.style.display="";
    clatite.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
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

function miciCuCartofi1 (){

    spaghetti.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    miciCuCartofi.style.display="none";
    clatite.style.display="none";
    PmiciCuCartofi.innerText="Mici Cu Cartofi " + ", Pret : 15.50 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaMiciCuCartofi.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

miciCuCartofi.addEventListener("click", miciCuCartofi1);

function functiiComandaMiciCuCartofi (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    ramen.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    clatite.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
    BunVenit.style.display="";
    buttonComandaMiciCuCartofi.style.display="none";
    PmiciCuCartofi.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 15.50
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaMiciCuCartofi.addEventListener("click", functiiComandaMiciCuCartofi);



function clatite1 (){

    spaghetti.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    miciCuCartofi.style.display="none";
    clatite.style.display="none";
    Pclatite.innerText="Clatite Americane " + ", Pret : 12.50 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaClatite.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

clatite.addEventListener("click", clatite1);

function functiiComandaClatite (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    clatite.style.display="";
    ramen.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
    BunVenit.style.display="";
    buttonComandaClatite.style.display="none";
    Pclatite.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 12.50
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaClatite.addEventListener("click", functiiComandaClatite);

function ramen1 (){

    spaghetti.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    miciCuCartofi.style.display="none";
    clatite.style.display="none";
    Pramen.innerText="Ramen " + ", Pret : 18.90 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaRamen.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

ramen.addEventListener("click", ramen1);

function functiiComandaRamen (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    clatite.style.display="";
    ramen.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
    BunVenit.style.display="";
    buttonComandaRamen.style.display="none";
    Pramen.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 18.90
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaRamen.addEventListener("click", functiiComandaRamen);

function sarmale1 (){

    spaghetti.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    miciCuCartofi.style.display="none";
    clatite.style.display="none";
    Psarmale.innerText="Sarmale " + ", Pret : 20 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaSarmale.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

sarmale.addEventListener("click", sarmale1);

function functiiComandaSarmale (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    clatite.style.display="";
    ramen.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
    BunVenit.style.display="";
    buttonComandaSarmale.style.display="none";
    Psarmale.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 20
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaSarmale.addEventListener("click", functiiComandaSarmale);

function shaorma1 (){

    spaghetti.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    miciCuCartofi.style.display="none";
    clatite.style.display="none";
    Pshaorma.innerText="Shaorma " + ", Pret : 20 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaShaorma.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

shaorma.addEventListener("click", shaorma1);

function functiiComandaShaorma (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    clatite.style.display="";
    ramen.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
    BunVenit.style.display="";
    buttonComandaShaorma.style.display="none";
    Pshaorma.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 20
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaShaorma.addEventListener("click", functiiComandaShaorma);

function taco1 (){

    spaghetti.style.display="none";
    sarmale.style.display="none";
    shaorma.style.display="none";
    taco.style.display="none";
    ramen.style.display="none";
    burrito.style.display="none";
    miciCuCartofi.style.display="none";
    clatite.style.display="none";
    Ptaco.innerText="Taco " + ", Pret : 15 lei"
    burger.style.display="none"
    pizza.style.display="none"
    BunVenit.style.display="none"
    buttonComandaTaco.style.display="";
    comandaAmplasata.style.display="none";
    pretTotal.style.display="none";

}

taco.addEventListener("click", taco1);

function functiiComandaTaco (){

    burger.style.display="";
    sarmale.style.display="";
    shaorma.style.display="";
    taco.style.display="";
    burrito.style.display="";
    pizza.style.display="";
    clatite.style.display="";
    ramen.style.display="";
    spaghetti.style.display="";
    miciCuCartofi.style.display="";
    BunVenit.style.display="";
    buttonComandaTaco.style.display="none";
    Ptaco.innerText="";
    comandaAmplasata.style.display="";
    pretTotal.style.display="";
    bani += 15
    comandaAmplasata.innerHTML="Comenzi Amplasate : " + numar++;
    pretTotal.innerHTML="Pret Total : " + bani + " lei ";

}

buttonComandaTaco.addEventListener("click", functiiComandaTaco);

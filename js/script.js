//chiedo il numero di km che l'utente vuole fare
let km = prompt("quanti kilometri vuoi fare?", 10);
document.getElementById("km").innerHTML = km;

if (isNaN(km)) {
    //richiedo il numero nel caso abbia sbagliato a scrivere
    km = prompt("questo non è un numero, reinserisci quanti kilometri vuoi fare", 10);
}
//chiedo l'eta del utente
let eta = prompt("quanti anni hai?", 20);
document.getElementById("eta").innerHTML = eta;

if (isNaN(eta)) {
    //richiedo il numero nel caso abbia sbagliato a scrivere
    eta = prompt("questo non è un numero, reinserisci quanti anni hai", 20);
}
console.log(km, eta);

//faccio il calcolo del prezzo pieno del biglietto
let fullPrice = (km * 0.21).toFixed(2);
console.log(fullPrice);
//faccio degli if ed else per stabilire quale sconto applicare all'utente
if (eta < 18) {
    //per fare lo sconto del 20% ho fatto *80/100
    lowPrice = price = ((fullPrice * 80) / 100).toFixed(2);
    sale = "20%"
} else if (eta > 65) {
    //per fare lo sconto del 40% ho fatto *60/100
    lowestPrice = price = ((fullPrice * 60) / 100).toFixed(2);
    sale = "40%"
} else {
    //per il biglietto a prezzo pieno
    price = fullPrice;
    sale = "0%"
}

document.getElementById("sale").innerHTML = sale;
console.log(price);
//scrivo il prezzo del biglietto sul html
document.getElementById("price").innerHTML = price;

// JAVASASSONE (☞ﾟヮﾟ)☞🗿
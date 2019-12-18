// alert("nino");
// l programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// numero di km
var distanza = parseInt(prompt("Salve quanti km desidera percorrere?"));
if (isNaN(distanza)) {
  alert("inserisci un numero grazie");
  var distanza = parseInt(prompt("Salve quanti km desidera percorrere?"));
}
console.log(distanza);
document.getElementById('destinazione-viaggiatore').innerHTML = distanza
// eta viaggiaotre
var eta = parseInt(prompt("Potrebb indicarmi la su età?"));
console.log(eta);
if (isNaN(eta)) {
  alert("inserisca la sua eta grazie");
  var eta = parseInt(prompt("Potrebb indicarmi la su età?"));
}
document.getElementById('eta-viaggiatore').innerHTML = eta
// prezzo biglietto o.21
var costoAlKm = 0.21;
// junior 20%
if (eta <= 18) {
  var scontoJunior = ((distanza * 0.21) *20) / 100;
  console.log(scontoJunior);
  var prezzoFinaleJunior = (distanza * 0.21) - scontoJunior;
  console.log(prezzoFinaleJunior);
} else if (eta>= 65) {
   var scontoSenior = (distanza*0.21*40/100);
   console.log(scontoSenior);
   var prezzoFinaleSenior = (distanza * 0.21) - scontoSenior;
   console.log(prezzoFinaleSenior);
}else {
   var prezzoPieno = distanza * 0.21;
   console.log(prezzoPieno);
}

// senior 40%

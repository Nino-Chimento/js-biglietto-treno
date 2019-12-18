
// var data = new Date();
// var minuti = data.getMinutes();
// console.log(minuti);
// var orarioPartenza = 60;
// while ((orarioPartenza -minuti) <= 10) {
//   alert("mi spiace biglietto non piu acquistabile")
// }


// numero di km
var distanza = parseInt(prompt("Salve quanti km desidera percorrere?"));
while (isNaN(distanza)) {
  alert("inserisci un numero grazie");
  var distanza = parseInt(prompt("Salve quanti km desidera percorrere?"));
}
console.log(distanza);
document.getElementById('destinazione-viaggiatore').innerHTML = distanza;
// eta viaggiaotre
var eta = parseInt(prompt("Potrebb indicarmi la su età?"));
console.log(eta);
while (isNaN(eta)) {
  alert("inserisca la sua eta grazie");
  var eta = parseInt(prompt("Potrebb indicarmi la su età?"));
}
document.getElementById('eta-viaggiatore').innerHTML = eta;
// prezzo biglietto o.21
var costoAlKm = 0.21;

  var carta1 = 000;
  var carta2 = 001;

var cartaSconto =prompt("inserisca la sua carta sconto");
if ( cartaSconto == carta1 || cartaSconto == carta2){
  var scontoAggiuntivo = (distanza * 0.21)*5/100;
  console.log(scontoAggiuntivo);
}else{
  var scontoAggiuntivo = 0;
}
// junior 20%
if (eta <= 18) {
  var scontoJunior = ((distanza * 0.21) *20) / 100;
  console.log(scontoJunior);
  var prezzoFinaleJunior = (distanza * 0.21) - scontoJunior - scontoAggiuntivo;
  console.log(prezzoFinaleJunior);
  document.getElementById('prezzo-viaggiatore').innerHTML = prezzoFinaleJunior;

} else if (eta>= 65) {
   var scontoSenior = (distanza*0.21*40/100);
   console.log(scontoSenior);
   var prezzoFinaleSenior = (distanza * 0.21) - scontoSenior;
   console.log(prezzoFinaleSenior);
   document.getElementById('prezzo-viaggiatore').innerHTML = prezzoFinaleSenior;

}else {
   var prezzoPieno = distanza * 0.21;
   console.log(prezzoPieno);
   document.getElementById('prezzo-viaggiatore').innerHTML = prezzoPieno;
}

// senior 40%

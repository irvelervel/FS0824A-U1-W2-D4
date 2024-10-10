// il while è una struttura JS che vi permette di creare un CICLO, ovvero
// una ripetizione di una porzione di codice che si ri-eseguirà automaticamente
// un tot numero di volte, in questo caso non pre-determinato.

// while(condizione){
//  ripeti questo codice
// }
// se arrivati alla fine del while la condizione in testa è ancora true, si
// rientra nel while

let dice = 0

while (dice !== 6) {
  // finchè il dado NON è 6...
  // ...lo lanciamo di nuovo
  // Math.random() è molto versatile! ci permette, moltiplicandolo per un valore,
  // di avvicinarci al risultato. A quel punto si tratta di arrotondare per eccesso/difetto

  dice = Math.ceil(Math.random() * 6) // ogni volta che entriamo nel while, tiriamo il dado
  console.log('Il numero estratto è', dice)
  // se il numero estratto è proprio 6, siamo liberi! usciamo dal while
  // se il numero estratto NON è 6, rientriamo di nuovo nel while e tiriamo di nuovo il dado
}

// usciti dal while
console.log('USCITI DAL WHILE, È USCITO 6')

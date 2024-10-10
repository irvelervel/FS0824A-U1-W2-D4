// le FUNZIONI in JS sono dei BLOCCHI DI ISTRUZIONI RIUTILIZZABILI.
// le funzioni vanno PRIMA -dichiarate-, e poi -utilizzate-

// uno dei modi (più sempliciotti) per dichiarare una funzione è utilizzando
// direttamente la keyword "function"

// il modo CORRETTO di scrivere le funzioni in JS è assegnandole ad una costante
// in questo modo evitiamo l'hoisting implicito di JS che, con le funzioni dichiarate
// con semplicemente "function", solleverebbe a vostra insaputa parti del codice
// per far "funzionare" il vostro foglio .js

// console.log(x)
// let x = 10

const bark = function () {
  // questo è il CORPO della funzione, una lista di istruzioni che verrà ri-eseguita
  // ogni volta che invochiamo la funzione bark
  console.log('BAU')
}

// per utilizzare una funzione bisogna "invocarla"
bark() // ho invocato la funzione bark
bark()
bark()
// ora vedo 3 BAU in console perchè ho invocato bark 3 volte

const sum = function () {
  let total = 3 + 6
  console.log('la somma fa:', total)
}

sum()

// quindi scriveremo i nostri blocchi di codice "ricorrenti" in funzioni, in modo
// da evitare copincolla vari (principio "D R Y") e mantenere il codice più ordinato

// però le funzioni tradizionalmente sono un po' "limitate": la loro invocazione
// esegue un flusso di operazioni STATICO, FISSATO:

const waveToStefano = function () {
  console.log('CIAO, STEFANO')
}

waveToStefano()

// come faccio a renderla più "dinamica", "generica", spendibile in più situazioni?
// come faccio a fare una generica "waveToStudent"?

// DEFINIZIONE DI FUNZIONE
const waveToStudent = function (studentName) {
  //   console.log(studentName)
  console.log('CIAO, ' + studentName)
}

// 3 DIVERSE INVOCAZIONI
waveToStudent('Stefano') // io qui vorrei salutare Stefano
waveToStudent('Giulia') // io qui vorrei salutare Giulia
waveToStudent('Anna') // io qui vorrei salutare Anna
waveToStudent('Gabriele') // io qui vorrei salutare Anna

// ogni INVOCAZIONE della funzione è stata ARRICCHITA con un dato diverso

// altro es.
const calcAreaFixed = function () {
  const lato = 6
  console.log("L'area di questo quadrato FISSO è " + lato * lato)
}

calcAreaFixed()

const calcGenericArea = function (lato) {
  console.log("L'area di questo quadrato è " + lato * lato)
}

calcGenericArea(5)
calcGenericArea(9)
calcGenericArea(10)

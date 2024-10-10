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
  // studentName è 'Stefano' alla prima invocazione
  // studentName è 'Giulia' alla seconda invocazione
  // studentName è 'Anna' alla terza invocazione
  // studentName è 'Gabriele' alla quarta invocazione
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

const showMessage = function (message, type) {
  // VERSIONE SHORT
  //   let intro = type === 'info' ? 'INFORMAZIONE' : 'ERRORE'
  // VERSIONE SHORT PRO (con elseif)
  //   let intro =
  //     type === 'info'
  //       ? 'INFORMAZIONE'
  //       : type === 'success' // elseif
  //       ? 'SUCCESSO'
  //       : 'ERRORE' // else

  let intro = '' // "INFORMAZIONE" oppure "ERRORE"

  if (type === 'info') {
    intro = 'INFORMAZIONE' // cambio da stringa vuota a 'INFORMAZIONE'
  } else {
    // vuol dire che type è "error"
    intro = 'ERRORE'
  }

  console.log(intro + ' - ' + message)
}

showMessage('Login effettuato con successo', 'info')
showMessage('Problema nel login', 'error')
showMessage('Registrazione effettuata', 'info')

const sumTwoNumbers = function (num1, num2) {
  console.log('La somma dei due numeri è ' + (num1 + num2))
}

sumTwoNumbers(30, 6)
sumTwoNumbers(4, 69)
sumTwoNumbers(10, 100)
sumTwoNumbers(8) // ?? NaN

// BOSS FINALE
// le funzioni possono avere un VALORE DI RITORNO (return value)
// una funzione può, opzionalmente, avere un valore di ritorno
// "return"

const torna5 = function () {
  // questa funzione non riceve parametri
  // questa funzione però ritorna SEMPRE il numero 5
  return 5
  // una volta trovato un return in una funzione, la funzione TERMINA
  // console.log('ciao')
  // non vedremo mai questo console.log
}

console.log(torna5() + 10)

// questa invocazione di torna5() VALE 5

// es. un po' più realistico

const createADiceNumber = function () {
  const randomNumber = Math.random() // 0.234, 0.945, etc.
  const diceNumberFloat = randomNumber * 6 // 0.0001, 5.9999
  const integerResult = Math.ceil(diceNumberFloat) // 1, 2, 3, 4, 5, 6

  return integerResult
}

console.log(createADiceNumber())
// l'invocazione di questa funzione equivale al suo valore di ritorno

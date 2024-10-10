// un for è una struttura che permette di ripetere una porzione di codice {  }
// un numero PREDETERMINATO di volte

for (let i = 0; i < 5; i++) {
  // da 0 a 4 (che è l'ultimo valore minore di 5)
  // sono 5 volte!
}

// va benissimo per esplorare gli ARRAY

const array = ['mario', 'luigi', 'bowser']

array[0] // 'mario'
array[1] // 'luigi'
array[2] // 'bowser'
// array[3] // ?? undefined

for (let i = 0; i < array.length; i++) {
  console.log(i) // 0 1 2
  console.log(array[i]) // 'mario' 'luigi' 'bowser'
}

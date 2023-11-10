// Generators in JavaScript

// Un generatore è una funzione speciale in JavaScript che può essere messa in pausa e ripresa.
// È definita utilizzando la parola chiave "function*" e contiene uno o più "yield" statement.

// Creiamo una funzione generatrice semplice.
function* simpleGenerator() {
  console.log("Generatore è stato avviato.");
  yield 1;
  console.log("Primo yield è stato raggiunto.");
  yield 2;
  console.log("Secondo yield è stato raggiunto.");
  yield 3;
  console.log("Terzo yield è stato raggiunto.");
}

// Per utilizzare un generatore, dobbiamo creare un oggetto generatore.
const generator = simpleGenerator();

// La funzione non viene eseguita immediatamente. Viene restituito un oggetto generatore.

// Per ottenere il valore generato successivo, usiamo il metodo "next()".
console.log(generator.next()); // Output: { value: 1, done: false }

// Quando chiamiamo "next()", la funzione generatrice viene eseguita fino al primo "yield".
// Il valore del "yield" viene restituito nell'oggetto risultante, e il generatore è messo in pausa.

console.log(generator.next()); // Output: { value: 2, done: false }
console.log(generator.next()); // Output: { value: 3, done: false }

// Quando la funzione generatrice raggiunge la fine, "done" diventa "true".
console.log(generator.next()); // Output: { value: undefined, done: true }

// Possiamo anche passare valori al generatore utilizzando il metodo "next()".
function* generatorWithInput() {
  const value = yield "Inserisci un valore:";
  console.log(`Hai inserito: ${value}`);
  yield "Secondo yield";
}

const inputGenerator = generatorWithInput();

console.log(inputGenerator.next()); // Output: { value: "Inserisci un valore:", done: false }

// Per passare un valore al generatore, utilizziamo il metodo "next()" con un argomento.
console.log(inputGenerator.next("Hello!")); // Output: { value: "Secondo yield", done: false }

// Generatori possono essere utili per iterare su sequenze infinite o per elaborare dati in modo differito.

// Esempio: Generatore per numeri interi pari infiniti
function* evenNumbersGenerator() {
  let number = 0;
  while (true) {
    yield number;
    number += 2;
  }
}

const evenNumbers = evenNumbersGenerator();

console.log(evenNumbers.next()); // Output: { value: 0, done: false }
console.log(evenNumbers.next()); // Output: { value: 2, done: false }
console.log(evenNumbers.next()); // Output: { value: 4, done: false }

// Questo generatore può essere utilizzato per ottenere infiniti numeri pari uno alla volta.

// I generatori forniscono un modo potente per scrivere codice asincrono più leggibile e mantenibile
// utilizzando la funzione "yield" per mettere in pausa l'esecuzione finché non è pronto un risultato asincrono.

//ES 1
const tableOfNum = (num) => {
  for (let i = 1; i <= num; i++) {
    const result = num * i;
    console.log(num + `x ${i} = ${result}`);
  }
};
tableOfNum(7);
//ES 2

function reverseWords(str) {
  const words = str.split(" ");

  const reversedWords = words.map((word) => word.split("").reverse().join(""));

  return reversedWords.join(" ");
}

const originalSentence = "Hello World";
const reversedSentence = reverseWords(originalSentence);
console.log(reversedSentence);

// ES 3
function invert(numbers) {
  const invertedNumbers = numbers.map((number) => -number);

  return invertedNumbers;
}
console.log(invert([1, 2, 3, -4, 5, 6]));
/*La differenza principale tra le due funzioni eseguiOperazioneAsincrona e eseguiOperazioneAsincrona2 sta nell'approccio asincrono utilizzato per gestire operazioni che richiedono del tempo.

eseguiOperazioneAsincrona è una funzione classica con un callback. Utilizza setTimeout per simulare un'operazione asincrona e chiama il callback quando l'operazione è completata. 
Questo approccio è basato su callback e viene spesso utilizzato in JavaScript, ma può portare a callback hell quando ci sono molte operazioni asincrone annidate.
eseguiOperazioneAsincrona2 è una funzione asincrona che restituisce una Promise. Questa funzione utilizza await per attendere che la Promise venga risolta e restituisca il risultato quando l'operazione è completata. 
Questo approccio è più moderno e leggibile, specialmente quando si hanno molte operazioni asincrone da gestire, poiché consente di scrivere il codice in modo più lineare, evitando callback annidati.
In entrambi i casi, l'output sarà "Operazione completata", ma l'approccio e la struttura del codice sono diversi.
 La versione con Promise e await è generalmente preferita in codice moderno per gestire operazioni asincrone in modo più pulito e gestibile. */

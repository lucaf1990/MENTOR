// ES 1

/*Scrivi un programma che prenda in input un numero casuale e stampi la tabellina del (num) da 1 a 10 utilizzando un ciclo for. 
Ad esempio, la tabellina del 7 dovrebbe apparire come:   
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70

************************************************************************************************
*/

/*

// ES2

Completa la funzione che accetta un parametro stringa e inverte ogni parola nella stringa.
Tutti gli spazi nella stringa devono essere mantenuti.

Esempio:
"spazi doppi" ==> "izaps ippod""


***** ATTENZIONE ******

La funzione prende una stringa come input e inverte l'ordine delle lettere all'interno 
di ciascuna parola, mantenendo intatti gli spazi tra le parole.

*/

function reverseWords(str) {
  /*  */
}

//************************************************************************************************

// ES 3

/*"Dati un insieme di numeri, restituisci l'inverso additivo di ciascuno. I positivi diventano negativi, e i negativi diventano positivi.

inverti([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
inverti([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
inverti([]) == []
Puoi assumere che tutti i valori siano numeri interi. Non modificare l'array di input/lista." */

function invert(numbers) {
  /* */
}

//ES 4

function eseguiOperazioneAsincrona(callback) {
  setTimeout(function () {
    callback("Operazione completata");
  }, 1000);
}

eseguiOperazioneAsincrona(function (risultato) {
  console.log(risultato);
});

async function eseguiOperazioneAsincrona2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Operazione completata"), 1000);
  });
}

async function main() {
  const risultato = await eseguiOperazioneAsincrona2();
  console.log(risultato);
}

main();

// Metodi per lavorare con gli array
const array = [1, 2, 3, 4, 5];

// 1. forEach - Esegue una funzione per ogni elemento dell'array
array.forEach((element) => {
  console.log(element);
});

// 2. map - Crea un nuovo array trasformando ogni elemento
const squaredArray = array.map((element) => element ** 2);
console.log(squaredArray);

// 3. filter - Crea un nuovo array con elementi che soddisfano una condizione
const evenNumbers = array.filter((element) => element % 2 === 0);
console.log(evenNumbers);

// 4. reduce - Riduce l'array a un singolo valore
const sum = array.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// 5. find - Restituisce il primo elemento che soddisfa una condizione
const firstEven = array.find((element) => element % 2 === 0);
console.log(firstEven);

// 6. every - Verifica se tutti gli elementi soddisfano una condizione
const allEven = array.every((element) => element % 2 === 0);
console.log(allEven);

// 7. some - Verifica se almeno un elemento soddisfa una condizione
const hasOdd = array.some((element) => element % 2 !== 0);
console.log(hasOdd);

// 8. sort - Ordina gli elementi dell'array
const sortedArray = array.sort((a, b) => a - b);
console.log(sortedArray);

// 9. reverse - Inverte l'ordine degli elementi dell'array
const reversedArray = array.reverse();
console.log(reversedArray);

// 10. concat - Combina due o più array in uno
const newArray = array.concat([6, 7, 8]);
console.log(newArray);

// 11. slice - Estrae una porzione di un array
const subArray = array.slice(1, 4);
console.log(subArray);

// 12. includes - Verifica se un elemento è presente nell'array
const includesThree = array.includes(3);
console.log(includesThree);

// Metodi per lavorare con le stringhe
const string = "Hello, World";

// 13. split - Divide una stringa in un array di sottostringhe
const words = string.split(" ");
console.log(words);

// 14. join - Unisce un array di sottostringhe in una stringa
const newString = words.join("-");
console.log(newString);

// 15. indexOf - Restituisce l'indice della prima occorrenza di una sottostringa
const index = string.indexOf("World");
console.log(index);

// 16. lastIndexOf - Restituisce l'indice dell'ultima occorrenza di una sottostringa
const lastIndex = string.lastIndexOf("l");
console.log(lastIndex);

// 17. slice - Estrae una porzione di una stringa
const substring = string.slice(0, 5);
console.log(substring);

// 18. substring - Estrae una porzione di una stringa
const sub = string.substring(7, 12);
console.log(sub);

// 19. toUpperCase - Trasforma una stringa in maiuscolo
const upperString = string.toUpperCase();
console.log(upperString);

// 20. toLowerCase - Trasforma una stringa in minuscolo
const lowerString = string.toLowerCase();
console.log(lowerString);

// 21. trim - Rimuove spazi bianchi all'inizio e alla fine di una stringa
const trimmedString = "   Trim me   ".trim();
console.log(trimmedString);

// 22. replace - Sostituisce sottostringhe in una stringa
const replacedString = string.replace("World", "JavaScript");
console.log(replacedString);

// 23. startsWith - Verifica se una stringa inizia con una sottostringa
const startsWithHello = string.startsWith("Hello");
console.log(startsWithHello);

// 24. endsWith - Verifica se una stringa termina con una sottostringa
const endsWithWorld = string.endsWith("World");
console.log(endsWithWorld);

// Metodi per lavorare con le Promesse
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Operazione completata"), 1000);
});

// 25. then - Gestisce la risoluzione di una Promessa
promise.then((result) => {
  console.log(result);
});

// 26. catch - Gestisce eventuali errori durante la risoluzione della Promessa
promise.catch((error) => {
  console.error(error);
});

// 27. Promise.all - Gestisce un array di Promesse e si risolve quando tutte le Promesse si sono risolte
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// 28. Promise.race - Gestisce un array di Promesse e si risolve quando la prima Promessa si risolve
const racePromise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Prima Promessa"), 1000)
);
const racePromise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Seconda Promessa"), 500)
);

Promise.race([racePromise1, racePromise2]).then((result) => {
  console.log(result);
});

// Metodi per lavorare con oggetti
const person = { name: "John", age: 30 };

// 29. Object.keys - Restituisce le chiavi di un oggetto come un array
const keys = Object.keys(person);
console.log(keys);

// 30. Object.values - Restituisce i valori di un oggetto come un array
const values = Object.values(person);
console.log(values);

// 31. Object.entries - Restituisce coppie chiave-valore di un oggetto come array di array
const entries = Object.entries(person);
console.log(entries);

// 32. Object.assign - Copia le proprietà di un oggetto in un altro oggetto
const newObj = Object.assign({}, person, { city: "New York" });
console.log(newObj);

// Metodi per lavorare con funzioni
function add(a, b) {
  return a + b;
}

// 33. call - Esegue una funzione specificando il contesto e gli argomenti
const result1 = add.call(null, 2, 3);
console.log(result1);

// 34. apply - Esegue una funzione specificando il contesto e un array di argomenti
const result2 = add.apply(null, [4, 5]);
console.log(result2);

// 35. bind - Restituisce una nuova funzione legata a un contesto specifico
const boundAdd = add.bind(null, 6);
const result3 = boundAdd(7);
console.log(result3);

// 36. typeof - Determina il tipo di una variabile
const typeOfPerson = typeof person;
console.log(typeOfPerson);

// 37. instanceof - Verifica se un oggetto è un'istanza di una classe
const isInstance = person instanceof Object;
console.log(isInstance);

// 38. isNaN - Verifica se un valore è NaN
const isNaNExample = isNaN("Not a Number");
console.log(isNaNExample);

// 39. parseFloat - Converte una stringa in un numero decimale
const parsedFloat = parseFloat("3.14");
console.log(parsedFloat);

// 40. parseInt - Converte una stringa in un numero intero
const parsedInt = parseInt("42");
console.log(parsedInt);

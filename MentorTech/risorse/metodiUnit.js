// Esempio 1: Filtrare e mappare un array
const numbers = [1, 2, 3, 4, 5];
const squaredEvenNumbers = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num ** 2);
console.log(squaredEvenNumbers);

// Esempio 2: Trovare la lunghezza media delle parole in una stringa
const text = "Questo è un esempio di stringa con alcune parole.";
const averageWordLength =
  text
    .split(" ")
    .map((word) => word.length)
    .reduce((acc, len) => acc + len, 0) / text.split(" ").length;
console.log(averageWordLength);

// Esempio 3: Concatenare due stringhe e trasformarle in maiuscolo
const string1 = "Hello,";
const string2 = " World!";
const concatenatedAndUppercase = (string1 + string2).toUpperCase();
console.log(concatenatedAndUppercase);

// Esempio 4: Verificare se una stringa inizia con una lettera maiuscola
const name = "John";
const startsWithUppercase = name[0] === name[0].toUpperCase();
console.log(startsWithUppercase);

// Esempio 5: Copiare le proprietà da un oggetto all'altro
const person1 = { name: "Alice", age: 25 };
const person2 = { country: "USA", ...person1 };
console.log(person2);

// Esempio 6: Gestire una sequenza di Promesse con Promise.all
const promise1 = Promise.resolve("Prima Promessa");
const promise2 = Promise.resolve("Seconda Promessa");
const promise3 = Promise.resolve("Terza Promessa");

Promise.all([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);

// Esempio 7: Trovare la somma degli elementi pari di un array
const numArray = [1, 2, 3, 4, 5, 6];
const sumOfEvenNumbers = numArray
  .filter((num) => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);
console.log(sumOfEvenNumbers);

// Esempio 8: Concatenare due array e rimuovere i duplicati
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const concatenatedAndUnique = [...new Set(array1.concat(array2))];
console.log(concatenatedAndUnique);

// Esempio 9: Verificare se almeno un elemento di un array è maggiore di 10
const numArray2 = [8, 12, 5, 4, 7];
const hasElementGreaterThanTen = numArray2.some((num) => num > 10);
console.log(hasElementGreaterThanTen);

// Esempio 10: Estrarre il testo in grassetto da un array di oggetti
const items = [
  { text: "Questo è normale", style: "normal" },
  { text: "Questo è in grassetto", style: "bold" },
  { text: "Questo è corsivo", style: "italic" },
];

const boldTexts = items
  .filter((item) => item.style === "bold")
  .map((item) => item.text);
console.log(boldTexts);

// Esempio 11: Filtrare, mappare e ridurre un array di oggetti
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 },
  { name: "Monitor", price: 300 },
];

const totalPriceOfExpensiveProducts = products
  .filter((product) => product.price > 100)
  .map((product) => product.price)
  .reduce((acc, price) => acc + price, 0);
console.log(totalPriceOfExpensiveProducts);

// Esempio 12: Unire array di oggetti tramite la proprietà "id"
const users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const users2 = [
  { id: 2, age: 30 },
  { id: 3, age: 25 },
];

const mergedUsers = users1.concat(users2);
const uniqueUsers = Array.from(new Set(mergedUsers.map((user) => user.id))).map(
  (id) => {
    const userData = Object.assign(  // ricordate shallow and deep copy sono argomenti richiesti spesso 
      {},
      ...mergedUsers.filter((user) => user.id === id)
    );
    return userData;
  }
);
console.log(uniqueUsers);

// Esempio 13: Calcolare la somma dei quadrati dei numeri dispari
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfOddSquares = numbers2
  .filter((num) => num % 2 !== 0)
  .map((num) => num ** 2)
  .reduce((acc, squaredNum) => acc + squaredNum, 0);
console.log(sumOfOddSquares);

// Esempio 14: Generare una stringa casuale di lunghezza 8
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const randomString = Array.from( // cercate docs  su Array. 
  { length: 8 },
  () => characters[Math.floor(Math.random() * characters.length)]
).join("");
console.log(randomString);

// Esempio 15: Trovare la data più recente da un array di oggetti data
const dates = [
  { date: "2022-01-15" },
  { date: "2023-05-20" },
  { date: "2022-11-10" },
];

const latestDate = new Date(
  Math.max(...dates.map((item) => new Date(item.date)))
).toISOString();
console.log(latestDate);

// Esempio 16: Calcolare la somma dei numeri in una stringa
const text2 = "I have 3 apples, 2 bananas, and 5 oranges.";
const numbersInText = text2.match(/\d+/g);
const sumOfNumbersInText = numbersInText.reduce(
  (acc, num) => acc + parseInt(num),
  0
);
console.log(sumOfNumbersInText);

// Esempio 17: Rilevare le vocali in una stringa e contarle
const sentence = "This is a simple example sentence with vowels.";
const vowels = sentence.match(/[aeiouAEIOU]/g);
const vowelCount = vowels ? vowels.length : 0;
console.log(vowelCount);

// Esempio 18: Creare una stringa formattata da un oggetto
const person = { name: "John", age: 30, city: "New York" };
const formattedString = `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
console.log(formattedString);

// Esempio 19: Trovare il massimo valore in un array di numeri
const numberArray = [45, 22, 67, 89, 13, 56];
const maxNumber = numberArray.reduce(
  (max, num) => (num > max ? num : max),
  numberArray[0]
);
console.log(maxNumber);

// Esempio 20: Contare le occorrenze di ciascun elemento in un array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log(fruitCount);

// Esempio 21: Creare un array di stringhe in maiuscolo dalla prima lettera di ciascuna parola
const sentence3 = "questo è un esempio di frase con parole";
const capitalizedWords = sentence3
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalizedWords);

// Esempio 22: Calcolare il prodotto di tutti gli elementi in un array
const numbers3 = [2, 3, 4, 5];
const product = numbers3.reduce((acc, num) => acc * num, 1);
console.log(product);

// Esempio 23: Trovare la somma delle cifre in una stringa di numeri
const numberString = "12345";
const sumOfDigits = numberString
  .split("")
  .reduce((acc, digit) => acc + parseInt(digit), 0);
console.log(sumOfDigits);

// Esempio 24: Filtrare gli utenti di età compresa tra 18 e 30 anni
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

const youngAdults = users.filter((user) => user.age >= 18 && user.age <= 30);
console.log(youngAdults);

// Esempio 25: Calcolare la differenza di giorni tra due date
const startDate = new Date("2023-01-15");
const endDate = new Date("2023-02-10");
const timeDifference = Math.abs(endDate - startDate);
const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
console.log(daysDifference);

// Esempio 26: Trovare la stringa più lunga in un array di stringhe
const stringArray = ["apple", "banana", "cherry", "date"];
const longestString = stringArray.reduce(
  (longest, str) => (str.length > longest.length ? str : longest),
  ""
);
console.log(longestString);

// Esempio 27: Contare le occorrenze di parole in una stringa
const text3 =
  "Questo è un esempio di testo con parole, e questo è un testo simile con parole simili.";
const wordCount = text3.match(/\b\w+\b/g).reduce((count, word) => {
  count[word] = (count[word] || 0) + 1;
  return count;
}, {});
console.log(wordCount);

// Esempio 28: Concatenare due array e rimuovere i duplicati
const array3 = [1, 2, 3];
const array4 = [3, 4, 5];
const concatenatedAndUnique2 = Array.from(new Set(array3.concat(array4)));
console.log(concatenatedAndUnique);

// Esempio 29: Trovare il minimo valore in un array di numeri
const numberArray2 = [45, 22, 67, 89, 13, 56];
const minNumber = numberArray2.reduce(
  (min, num) => (num < min ? num : min),
  numberArray2[0]
);
console.log(minNumber);

// Esempio 30: Estrarre le chiavi e i valori di un oggetto in array separati
const person3 = { name: "John", age: 30, city: "New York" };
const keys = Object.keys(person3);
const values = Object.values(person3);
console.log("Chiavi:", keys);
console.log("Valori:", values);

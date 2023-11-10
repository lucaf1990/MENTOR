// ES6 Features and Examples

// Destructuring Assignment
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// Template Literals
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

// Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Default Parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Guest!

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

const person = new Person("Bob");
person.greet(); // Hello, Bob!

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 5000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Spread Operator (with Objects)
const person1 = { name: "Alice", age: 30 };
const person2 = { ...person1, city: "New York" };
console.log(person2);

// Map
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

console.log(map.get("key1")); // value1

// Set
const set = new Set([1, 2, 3, 2, 1]);
console.log(set); // { 1, 2, 3 }

// Object Destructuring
const { name: personName, age: personAge } = person1;
console.log(personName); // Alice
console.log(personAge); // 30

// ES6 Modules (not supported in standard JavaScript environments)

// Reduce
const numbers = [1, 2, 3, 4, 5];
const sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum2); // 15

// Reduce Example 1: Calculating the Sum of an Array
const numbersToSum = [10, 20, 30, 40, 50];
const totalSum = numbersToSum.reduce((acc, num) => acc + num, 0);
console.log(totalSum); // 150

// Reduce Example 2: Flattening an Array of Arrays
const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = arrayOfArrays.reduce(
  (acc, current) => acc.concat(current),
  []
);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

// Reduce Example 3: Grouping Objects by a Property
const data = [
  { category: "A", value: 10 },
  { category: "B", value: 20 },
  { category: "A", value: 15 },
  { category: "C", value: 25 },
];

const groupedData = data.reduce((groups, item) => {
  const key = item.category;
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(item);
  return groups;
}, {});

console.log(groupedData);

// Reduce Example 4: Removing Duplicates from an Array
const numbersWithDuplicates = [1, 2, 3, 4, 2, 5, 3, 6];
const uniqueNumbers = numbersWithDuplicates.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(uniqueNumbers);

// Reduce Example 5: Counting Word Occurrences in a Text
const text = "This is a sample text with some sample words.";
const wordCount = text
  .toLowerCase()
  .match(/\w+/g)
  .reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
  });

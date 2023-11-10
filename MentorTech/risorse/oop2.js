// Programmazione Orientata agli Oggetti (OOP) in JavaScript

// JavaScript è un linguaggio di programmazione orientato agli oggetti (OOP) che consente di definire oggetti, classi e utilizzare concetti come l'ereditarietà, l'incapsulamento e il polimorfismo. Ecco una panoramica dettagliata di come funziona l'OOP in JavaScript.

// Creazione di oggetti:
// Gli oggetti in JavaScript sono contenitori di dati e metodi. Possono essere creati in vari modi.

// 1. Oggetto Letterale:
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

// 2. Costruttore di Oggetti:
// È possibile utilizzare una funzione costruttrice per creare più oggetti simili.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  };
}

const person2 = new Person("Bob", 25);

// Classi e Costruttori:
// JavaScript ha introdotto la sintassi delle classi per semplificare la creazione di oggetti simili.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const person1 = new Person("Bob", 25);

// Ereditarietà:
// JavaScript supporta l'ereditarietà attraverso le classi. È possibile creare nuove classi che ereditano proprietà e metodi da classi esistenti.

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Chiama il costruttore della classe genitore.
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard to get good grades.`);
  }
}

const student1 = new Student("Charlie", 20, "A");

// Metodi Statici:
// I metodi statici appartengono alla classe, non alle istanze, e sono chiamati direttamente sulla classe.

class MathUtils {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(4)); // Output: 16

// Prototype:
// Ogni oggetto in JavaScript ha un prototipo che definisce le sue proprietà e metodi. È possibile estendere il prototipo per condividere metodi tra oggetti simili.

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says Woof!`);
};

const dog1 = new Dog("Buddy");

// Closure e Incapsulamento:
// Le closure consentono di incapsulare variabili e metodi all'interno di una funzione e limitarne l'accesso dall'esterno.

function Counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },

    getCount: function () {
      return count;
    },
  };
}

const counter = Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1

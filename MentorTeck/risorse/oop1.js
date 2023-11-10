// Programmazione Orientata agli Oggetti (OOP) in JavaScript

// 1. Creare un oggetto:
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

// 2. Accesso alle proprietà dell'oggetto:
console.log(person.name); // Output: "Alice"
person.greet(); // Output: "Hello, my name is Alice and I'm 30 years old."

// 3. Costruttori e Classi:
// JavaScript supporta classi per creare oggetti simili.
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
person1.greet(); // Output: "Hello, my name is Bob and I'm 25 years old."

// 4. Ereditarietà:
// È possibile estendere classi esistenti per creare nuove classi con proprietà e metodi aggiunti.
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Richiama il costruttore della classe genitore.
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard to get good grades.`);
  }
}

const student1 = new Student("Charlie", 20, "A");
student1.greet(); // Output: "Hello, my name is Charlie and I'm 20 years old."
student1.study(); // Output: "Charlie is studying hard to get good grades."

// 5. Metodi Statici:
// I metodi statici appartengono alla classe, non alle istanze.
class MathUtils {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.square(4)); // Output: 16

// 6. Prototype:
// Ogni oggetto in JavaScript ha un prototipo che definisce le sue proprietà e metodi.
// Possiamo estendere il prototipo per condividere metodi tra oggetti simili.
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} says Woof!`);
};

const dog1 = new Dog("Buddy");
dog1.bark(); // Output: "Buddy says Woof!"

// 7. Closure e Incapsulamento:
// JavaScript permette di utilizzare le closure per incapsulare le variabili e i metodi in un oggetto.
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

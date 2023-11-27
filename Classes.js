

class Node {
  constructor(name, prev = null, next = null) {
    this.name = name;
    this.prev = prev;
    this.next = next;
  }
}

class SpecialNode extends Node {
  constructor(name, prev, next, type = "special") {
    super(name, prev, next);
    this.type = type;
  }
  bark() {
    console.log("woof woof");
  }
}
























class Person {
  constructor(name = "Andrew", age = 33) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return (`Hello, my name is ${this.name}. I'm having a great time.`)
  }

}

const marky = new Person();

class CodingPerson extends Person {
  constructor(name, age, language = "Python") {
    super(name, age);
    this.language = language;
  }
}

const markySad = new CodingPerson();
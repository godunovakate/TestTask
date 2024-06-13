'use strict'

class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country=country;
    }
  
    information() {
      return `Имя: ${this.name}, возраст: ${this.age}, страна: ${this.country}`;
    }
  }

  let first=new Person('Pete', 21, 'Belarus');
  let second=new Person('Mike', 21, 'The UK');

  console.log(Person.information(first));
  console.log(Person.information(second));
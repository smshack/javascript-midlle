class Human {
  #age = 10;

  getAge() {
    return this.#age;
  }
}

class Person extends Human {
  #age = 20;

  getFakeAge() {
    return this.#age;
  }
}

const p = new Person();
console.log(p.getAge()); // 10
console.log([p.getFakeAge()]); // 20
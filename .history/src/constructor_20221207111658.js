class Person {
    // constructor(생성자)
    constructor(name, age) { // 인자를 받아 할당한다.
      // fields
      this.name = name; // this는 객체(변수명)를 지칭한다.
      this.age = age; // this.name, this.age는 클래스의 필드(프로퍼티)이다.
    }
  
    // methods
    speak() {
      console.log(`${this.name}: hello!`);
    }
  }
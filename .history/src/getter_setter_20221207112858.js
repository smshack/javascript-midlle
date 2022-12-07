class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get age() {
      return this._age;
    }
  
    set age(value) {
      // 잘못된 값 할당 적극적으로 막기 (에러 던저주기)
      // if (value < 0) {
      //   throw Error(`age can not be negative`);
      // }
      
      // 잘못된 값 할당 젠틀하게 막기 (0으로 저장하기)
      this._age = value < 0 ? 0 : value; 
    }
  }

const user1 = new User('서','명석',-1)
console.log(user1)
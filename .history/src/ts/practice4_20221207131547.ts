interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

console.log(person,'person')
console.log(expert,'expert')
console.log('---------------------------------------------------------------')
interface Person2 {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer2 extends Person2 {
  skills: string[];
}

const person2: Person2 = {
  name: '김사람',
  age: 20
};

const expert2: Developer2 = {
  name: '김개발',
  skills: ['javascript', 'react']
};

const people: Person2[] = [person, expert];
console.log(person2,'person2')
console.log(expert2,'expert2')
console.log(people,'people')
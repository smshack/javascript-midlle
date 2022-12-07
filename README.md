- https://velog.io/@younoah/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%99%80-%EA%B0%9D%EC%B2%B4-%EC%B4%9D%EC%A0%95%EB%A6%AC
- https://velog.io/@seachan2000/JavaScript-Class-Constructor%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90
- https://velog.io/@kkojae91/private-class-field%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0%EB%8A%94
- https://velog.io/@velopert/typescript-basics

# 환경 준비
```
yarn init -y
```

## 타입스크립트 글로벌 설치
```
yarn global add typescript
```

# 타입스크립트 설정파일 생성하기
- tsc --init
- 타입스크립트 설정파일 tsconfig.json 생성
- 나머지는 기본 생성 추가로 "outDir": "./dist" 컴파일된 파일들이 저장되는 경로 지정
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  }
}
```

## 기본적인 타입 정의 사용
```
let count =0;
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 숫자 넣으려고 하면.. 안된다!


let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
let color: 'red' | 'orange' | 'green' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
color = 'green'; // 에러 발생!
```

## 함수에서 타입 정의하기
- 함수의 파라미터로 어떤 타입을 넣어야 하는지 바로 알수 있음
```
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

// 반환 값이 없는 경우는 반환 타입을 void 로 설정
function returnNothing(): void {
  console.log('I am just saying hello world');
}
```
## javascript 클래스
### 클래스
- 틀의 역할
- 한번만 선언
- 클래스 안에는 데이터가 없음
- 메모리에 올라가지 않는다

### 객체
- instance of a class, 클래스의 인스턴스
- 한개의 클래스로 여러개의 객체를 만들수 있다
- 객체 안에는 데이터가 있다
- 메모리에 올라감

> 클래스틑 달고나 틀
> 객체는 클래스로 찍어낸 달고나
> 즉 클래스를 정의해서 다양한 객체를 만든다

### 생성자
- 객체를 생성할 때 인자를 프로퍼티에 전달하여 생성
- 즉 객체를 만들 때 필요한 데이터를 전달하여 생성
```
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
```
### getter
- 객체의 특정 프로퍼티 값을 가져오도록 하기 위한 메소드
- 동적으로 계산이 필요한 프로퍼티 값을 가져와야 할 때 사용
- 계산 미루기
    - getter가 호출되기 전까진 계산을 하지 않고 대기한다. getter의 값계산은 실제 값이 필요할 때 이루어 지게 된다.

- 캐싱처리
    - getter는 프로퍼티 값을 나중에 접근하기 위해 값을 캐싱한다. 값은 getter가 호출될 때 계산되며, 캐싱하게 된다. (이후의 호출은 다시 계산하지 않고 이 캐시값을 반환한다.)

### setter
- 객체의 특정 프로퍼티 값을 설정하기 위한 메소드
- 프로터티 값이 변경되어 질 때마다 함수를 실행하는데 사용
- setter는 주로 잘못된 값을 할당 할 때 예외처리를 하기 위해 사용한다.
    - 예를들어 Person클래스에 age프로퍼티가 있는데 age에 음수값을 할당하면 말이 안되기 때문에 음수를 넣으면 에러를 던저주거나 0을 저장
- getter와 setter 안에서 사용되는 프로퍼티 이름앞에 관습적으로 언더바를 작성해준다.
- this.age 를 호출하면 get age() {} 가 호출되어 지는데 안에서 또 this.age 를 사용하면 다시 `get age() {} 가 호출되어 무한루프에 빠지기 때문이다. 이 때 get age() {} 안에서는 this._age 같은 형태로 작성하면 무한루프를 방지할 수 있다
- 마찬가지로 this.age = value 와 같이 값을 할당할 때 set age() {} 가 호출되어 지는데 안에서 또e다시 this.age = value 와 같이 사용하면 또다시 set age() {} 가 호출되어 무한루프에 빠지기 때문이다. 이 때 set age() {} 안에서는 this._age = value 같은 형태로 작성하면 무한루프를 방지할 수 있다.
```
class User {
  constructor(firstName, lastNamem, age) {
    this.firstName = firstNamem;
    this.lastName = lastNamem;
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
```

## public
- 공개 프로퍼티
- 클래스에서 일반적인 방식으로 프로퍼티를 선언하고 할당하면 Public Property(공개 프로퍼티)이다
- 퍼블릭 프로퍼티는 외부에서 프로퍼티에 접근하여 값을 사용하거나 수정이 가능
- public 필드는 클래스 내부, 자식 클래스 내부, 클래스 인스턴스를 통한 접근이 모두 허용

## private
- 비공개 프로퍼티
- 클래스에서 프로퍼티 앞에 # 키워드를 작성하여 선언하면 Private Property (비공개 프로퍼티)가 된다.
- 프라이빗 프로퍼티는 오직 클래스 안에서만 사용, 변경이 가능하다. 외부에서는 접근이 불가능하다.
- private 필드는 클래스 내부에서만 접근이 가능
- 내부 인터페이스를 구성할 때 사용
- 데이터를 조금 더 안전하게 보관

```
class Experiment {
  publicField = 2; // 퍼블릭 프로퍼티, 위부에서 프로퍼티에 접근하여 값을 사용하거나 수정이가능하다.
  #privateField = 0; // 프라이빗 프로퍼티, 오직 클래스안에서만 사용, 변경이 가능하다. 외부에서 사용불가.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

```
```
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
```
## static
- 클래스 선언시 프로퍼티와 메소드 앞에 static 키워드를 작성
- 객체로 접근하여 사용할 수 없다
- 클래스(명) 으로만 접근하여 사용 가능( Class.propery , Class.method )
- 어떤 객체든 상관 없이 공통된 모든 객체에 같은 프로퍼티, 메서드가 필요할 때 사용하면 메모리를 줄일 수 있음
```
class Article {
  static publisher = 'alice'; // Static property
  constructor(articleNumber) {
    this.articleNumber = articleNumber; // 일반적인 property
  }

  static printPublisher() { // Static methods
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
// bad
console.log(article1.publisher); // undefined
article1.printPublisher(); // 에러

// good
console.log(Article.publisher);
Article.printPublisher();
```

## 클래스 상속
- 클래스에서 다른 클래스로 상속하면서 클래스의 기능을 확장해 나갈수 있다.
- 상속받을 클래스를 선언할 때 extend 부모클래스 키워들 사용하여 선언
> class 자식클래스 extends 부모클래스 {}
### 오버라이딩
- 자식클래스가 부모클래스를 상속받으면서 선언될 때 부모클래스의 프로퍼티와 메서드를 다시 새롭게 정의하여 덮어 씌운다.

### super
- spuer.메서드, spuer.프로퍼티 로 부모클래스의 메서드와 프로퍼티에 접근이 가능
```
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // Shape의 모든 정의들이 Rectangle클래스에 포함이 된다.
class Triangle extends Shape {
  getArea() {
    // 메서드 오버라이딩 - Shape에 정의되었던 메서드를 덮어씌워서 재정의한다.. 프로퍼티도 오버라이딩이 가능하다.
    return (this.width * this.height) / 2;
  }

  draw() {
    super.draw(); // super는 부모클래스, 즉 Shape클래스를 지칭한다.
    console.log(`🔺`);
  }
}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

```
### super
```
class Parnet {
    constructor(age){
        this.name = "paranet";
        this.age = age;
    }

    sayMyName(){
        console.log(this.name)
    }
    static holy(){
        return "holy"
    }
}

class Child extends Parnet{
    constructor(age){
        super(age);
        this.name = "child";
    }

    static holymoly(){
        console.log(super.holy() + "moly")
    }
}

console.log(Child.holy())
Child.holymoly()
```

## instanceOf
- 객체가 클래스의 속해있는지 여부를 확인하는 용도(결과는 bool)
> 객체 instancof 클래스
```
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true, 
```

## interface 사용
- 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법
> 클래스에서 interface 를 implements 하기
- 우리가 클래스를 만들 때, 특정 조건을 준수해야 함을 명시하고 싶을 때 interface 를 사용하여 클래스가 가지고 있어야 할 요구사항을 설정
- 클래스를 선언 할 때 implements 키워드를 사용하여 해당 클래스가 특정 interace의 요구사항을 구현한다는 것을 명시
```
// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number; // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.

  radius: number; // 멤버 변수 radius 값을 설정합니다.

  constructor(radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
});
```

## 일반 객체를 interface 로 타입 설정하기
- 클래스가 아닌 일반 객체를 interface 를 사용하여 타입을 지정하는 방법
```
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
```

```
interface Person {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}
interface Developer extends Person {
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

const people: Person[] = [person, expert];
```

## Type Alias 사용하기
- type은 특정 타입에 별칭을 붙이는 용도로 사용
- 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있음
```
type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람'
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react']
};

type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
```
- 우리가 이번에 type 과 interface 를 배웠는데, 어떤 용도로 사용을 해야 할까요? 무엇이든 써도 상관 없는데 일관성 있게만 쓰시면 됩니다. 구버전의 타입스크립트에서는 type 과 interface 의 차이가 많이 존재했었는데 이제는 큰 차이는 없습니다. 다만 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때는 interface를 사용하는것이 권장 되고 있습니다.

이에 대한 자세한 내용은 다음 링크에 자세히 서술되어 있습니다.

- https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
- https://joonsungum.github.io/post/2019-02-25-typescript-interface-and-type-alias/

# Generics
- 제네릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type을 사용하게 될 때 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법
- 예를 들어서 우리가 객체 A 와 객체 B 를 합쳐주는 merge 라는 함수를 만든다고 가정해봅시다. 그런 상황에서는 A 와 B 가 어떤 타입이 올 지 모르기 떄문에 이런 상황에서는 any 라는 타입을 쓸 수도 있습니다.

```
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
```
- 그런데, 이렇게 하면 타입추론이 모두 깨진거나 다름이 없습니다. 결과가 any 라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것
- 이런 상황에 제네릭을 사용하면 됨
- & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types

- 제네릭을 사용 할 때는 이렇게 <T> 처럼 꺽쇠 안에 타입의 이름을 넣어서 사용하며, 이렇게 설정을 해주면 제네릭에 해당하는 타입에는 뭐든지 들어올 수 있게 되면서도, 사용 할 때 타입이 깨지지 않게 됩니다. 만약 함수에 이렇게 제네릭을 사용하게 된다면 함수의 파라미터로 넣은 실제 값의 타입을 활용하게 된
```
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
```
```
function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);
```
- 함수에서 제너릭을 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있음

## interface 에서 Generics 사용
- Items<string> 라는 타입을 사용하게 된다면, Items 타입을 지니고 있는 객체의 list 배열은 string[] 타입을 지니고 있게 됩니다. 이렇게 함으로써, list가 숫자배열인 경우, 문자열배열인경우, 객체배열, 또는 그 어떤 배열인 경우에도 하나의 interface 만을 사용하여 타입을 설정 할 수 있습
```
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};
```
```
type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ['a', 'b', 'c']
};
```

## 클래스에서 Generics 사용
- Queue 는 데이터를 등록 할 수 있는 자료형
- 먼저 등록(enqueue)한 항목을 먼저 뽑아올 수(dequeue) 있는 성질
```
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
```
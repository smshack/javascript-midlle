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
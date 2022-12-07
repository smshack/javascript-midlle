function wrap<T>(param: T) {
    return {
      param
    }
  }
  
const wrapped = wrap(10);
const wrapped2 = wrap({value:1});
const wrapped3 = wrap([1,2,3,4,5]);

console.log(wrapped)
console.log(wrapped2)
console.log(wrapped3)
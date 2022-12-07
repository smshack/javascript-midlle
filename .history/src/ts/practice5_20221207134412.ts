function wrap<T>(param: T) {
    return {
      param
    }
  }
  
const wrapped = wrap(10);
const wrapped2 = wrap({value:1});

console.log(wrapped)
console.log(wrapped2)
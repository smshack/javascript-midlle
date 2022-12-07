type Items<T> = {
    list: T[];
  };
  
const stringitems: Items<string> = {
    list: ['a', 'b', 'c']
};

const numberitems: Items<number> = {
    list: [1, 2, 3]
};

const objectitems: Items<object> = {
    list: [{val:1}, {val:2}, {val:3}]
};

console.log(stringitems)
console.log(numberitems)
console.log(objectitems)
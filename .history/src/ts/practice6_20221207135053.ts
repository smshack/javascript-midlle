type Items<T> = {
    list: T[];
  };
  
  const stringitems: Items<string> = {
    list: ['a', 'b', 'c']
  };

console.log(stringitems)
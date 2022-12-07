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
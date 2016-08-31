let fruitName;
class Fruit {
  constructor(string){
    fruitName = string;
  }
  nameLen(){
    return fruitName.length;
  }
}

let fruit = new Fruit('Apple');
console.log(fruit.nameLen());

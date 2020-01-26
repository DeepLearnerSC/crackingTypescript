// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?:string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person2 implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n){
      this.name = n;
    } else {
      console.log('no input!')
    }
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person2('Song');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);

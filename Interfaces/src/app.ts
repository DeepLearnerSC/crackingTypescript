interface NamedPerson {
    firstName?: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
console.log('-----------------------------------------------------')
// greet({firstName: "Max", age: 27});
changeName(person); // Max => Anna
greet(person); // so it should be "Hello, Anna"
person.greet("Skywalker"); // "Hi, I am Anna Skywalker"
console.log('-----------------------------------------------------')

class Person implements NamedPerson {
    firstName?: string;
    lastName?: string;

    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person(); 
myPerson.firstName = "Ray";
myPerson.lastName = "Skywalker";
console.log('-----------------------------------------------------')
greet(myPerson);
myPerson.greet(myPerson.lastName);
console.log('-----------------------------------------------------')

// Function Types
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};
console.log('-----------------------------------------------------')
console.log(myDoubleFunction(10, 20));
console.log('-----------------------------------------------------')

// Interface Inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string) {
        console.log("Hello!", lastName);
    }
};

console.log(oldPerson);
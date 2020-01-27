type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

// Function Overloads
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add2("Ben", " Solo");
result.split(" ");


///////////////////Optional Chaining/////////////////////////////////////
const fetchedUserData = {
  id: "s1",
  name: "R2-D2",
  job: { title: "3PO2", description: "Love Darth....c" }
};

//   console.log(fetchedUserData?.job?.title);

//   const userInput2 = undefined;

//   const storedData = userInput2 ?? 'DEFAULT';

//   console.log(storedData);
//////////////////////////////////////////////////////////////////

///////////////////type guard/////////////////////////////////////
type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}
printEmployeeInformation({ name: 'Ben', startDate: new Date() });
////////////////////////////////////////////////////////////////////

////////////////////////instance of type guard////////////////////////////
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
////////////////////////////////////////////////////////////

///////////////////Discriminated Unions/////////////////////
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});
////////////////////////////////////////////////////////////

////////////////////////Type Casting////////////////////////
const userInputElement = <HTMLInputElement>document.getElementById('user-input');
userInputElement.value = 'Method 1'

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement2 = document.getElementById('user-input2') as HTMLInputElement;
userInputElement2.value = 'Method 2'

// const userInputElement3 = document.getElementById('user-input3')
// if (userInputElement3 {
//   (userInputElement3 as HTMLInputElement).value = 'Hi there!';
// }
////////////////////////////////////////////////////////////

////////////////////////Index Properties////////////////////////
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};
////////////////////////////////////////////////////////////
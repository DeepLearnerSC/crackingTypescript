console.log("Chapter 1: TypeScript Basics ");

/////////////////////////////////////////////////////////////////////////////
// Type 1: number, boolean, string
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 20;
const number2 = 20; // '20' => Argument of type '"20"' is not assignable to parameter of type 'number'.
const printResult = true;
const resultPhrase = "Result is: ";
const addResult = add(number1, number2, printResult, resultPhrase);
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// Type 2 : assign types, array, tuples, any
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27'; => error!

let hobbies: any[] = ["Cooking", "Sports"];
// hobbies = [100];
// hobbies = 100; => error!
for (const hobby of hobbies) {
  console.log(hobby.toUpperCase());
}

let address: [string, number] = ["Superstreet", 99];
// address.push('is this possible?, unfortunately yes...')
// address[1] = 'not possible' => error
// address = ['wow, this workS!', 77]
// address = ['nope', 1004, 'not a chance'] => error

enum Color {
  Gray, // 0
  Green = 100, // 100, not 1 if you assign the value
  Blue // it is 101 !!!! not 2!
}
let myColor: Color = Color.Blue;
console.log("this is enum, and my favorite number is ", myColor);

// any => not recommended. no point of using it.
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// Type 3: object, nested object
let userData: { name: string; age: number } = {
  name: "Song",
  age: 31
};
console.log("My name is", userData.name, ".");

let nested: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
/////////////////////////////////////////////////////////////////////////////

// Type 4: union, literal, aliases
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

// Type 5: functions
function sum(n1: number, n2: number) {
  return n1 + n2;
}

// return type is void
function printSum(num: number): void {
  console.log('Result: ' + num);
}

function returnMyName(): string {
  return "Song";
}
console.log(returnMyName());

let combineValues: (a: number, b: number) => number;

combineValues = sum;
// combineValues = printSum; // will cause an error!
// combineValues = 5;

console.log(".....", combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
  return 'what?'
  //callback functions can return something, even if the argument on which
  // they're passed odes NOT expect a returned value.
});

// unknown types
let userInput: unknown; // need extra type check!!
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);


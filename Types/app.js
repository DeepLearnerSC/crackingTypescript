console.log("Chapter 1: TypeScript Basics ");
/////////////////////////////////////////////////////////////////////////////
// Type 1: number, boolean, string
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 20;
var number2 = 20; // '20' => Argument of type '"20"' is not assignable to parameter of type 'number'.
var printResult = true;
var resultPhrase = "Result is: ";
var addResult = add(number1, number2, printResult, resultPhrase);
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Type 2 : assign types, array, tuples, any
var myRealAge;
myRealAge = 27;
// myRealAge = '27'; => error!
var hobbies = ["Cooking", "Sports"];
// hobbies = [100];
// hobbies = 100; => error!
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby.toUpperCase());
}
var address = ["Superstreet", 99];
// address.push('is this possible?, unfortunately yes...')
// address[1] = 'not possible' => error
// address = ['wow, this workS!', 77]
// address = ['nope', 1004, 'not a chance'] => error
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // it is 101 !!!! not 2!
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log("this is enum, and my favorite number is ", myColor);
// any => not recommended. no point of using it.
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Type 3: object, nested object
var userData = {
    name: "Song",
    age: 31
};
console.log("My name is", userData.name, ".");
var nested = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
// Type 5: functions
function sum(n1, n2) {
    return n1 + n2;
}
// return type is void
function printSum(num) {
    console.log('Result: ' + num);
}
function returnMyName() {
    return "Song";
}
console.log(returnMyName());
var combineValues;
combineValues = sum;
// combineValues = printSum; // will cause an error!
// combineValues = 5;
console.log(".....", combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
    return 'what?';
    //callback functions can return something, even if the argument on which
    // they're passed odes NOT expect a returned value.
});
// unknown types
var userInput; // need extra type check!!
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError('An error occurred!', 500);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);

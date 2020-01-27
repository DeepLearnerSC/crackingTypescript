TypeScripts adds ...
1. Types
2. Next-gen JavaScript Features (compiled down for older Browesers)
3. Non-javaScript Featrues like Interfaces or Generics
4. Meta-Programming features like Decorators.
5. Rich Configuration Options
6. Morden Tooling that helps even in non-Typescript Projects.


npm install


How to complie the ts file

tsc app.ts

how to execute the client server

npm start

developer tools
see the console log and test your understanding.




Working with Types
1. number 
: All numbers, no differentiation between integers or floats.
ex) 1, 5.3, -10
2. string 
: All text values
ex) 'Hi', "Bye", `LOL`
3. boolean
: Just these two, no "truthy" or "falsy" values
ex) true false
4. object
: Any JavaScript object, more specific types (type of object) are possible.
ex) {year: 2020}
5. array
: Any JavaScript array, type can be flexible or strict (regarding the element types)
6. tuple
: Added by TypeScript: Fixed-length array
ex) [1,2]
Notice! TypeScript's **type system only helps you during developmment** (before the code gets compiled.)
7. enum 
: Added by TypeScript: Automatically enumerated global constant identifiers.
ex) enum { NEW, OLD }
8. any
: Any kind of value, no specific type assignment
ex) *

JavaScript is dynamically typed which means it's perfectly fine that we have a variable which initially
might hold a number where we later assign a string to it.
And that's why we have the type of operator so that we can check the current type of something at runtime
if we have some code that depends on a certain type 
Typescript on the other end is statically type which means we define the types of variables 
and parameters ends on during development. They don't suddenly change during runtime.

Now of course since typescript is compiled to JavaScript they theoretically could.
But if we use typescript and we write code where we suddenly assign a new type of data into a variable
(where we previously set that this should be a number for example.
And now we're assigning a string then we get an error during development.)
So we are forced to be clear regarding the types something can or can not hold.
That's the difference here.

The key difference is: JavaScript uses "dynamic types" (resolved at runtime),
TypeScript uses "static types" (set during development).


app.ts에 있는 코드를 참조 바람.



Why are "Types" useful and offer an advantage compare to vanilla JavaScript?
Types allow you to detect if data of a wrong type is used or pass around, hence you can avoid unexpected runtime errors.

"type guard" helps you avoid runtime errors by checking types before you try to do something with the values.
"type casting" is helpful when you want to inform TS that a certain value is of specific type.
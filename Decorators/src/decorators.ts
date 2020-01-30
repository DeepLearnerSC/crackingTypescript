// Basic Decorator and Decorator Factories
function Logger(logString:string) {
    console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log("Logging...", logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('Rendering template')
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name;
      }
    }
}

// Adding mulitple decorators Possible!
@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Super Normal Web</h1>','app')
class Person {
  name = "Shaman";

  constructor() {
    console.log("Let's create Person object...");
  }
}

const pers = new Person();

console.log(pers);
/////////////////////////////////////////////////////////////////


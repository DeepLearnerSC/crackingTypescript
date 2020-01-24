abstract class Department {
  // this vs static
  // 'this' refers to the instance created based on the class
  // where as 'static' property is detached from instances.

  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear); //this.fiscalYear would not work!
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // Abstact forced to provide concrete implemenations ...
  // to define how this method should look like, what its structure is.
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const employee1 = Department.createEmployee("Song");
console.log("--------------DEPARTMENT----------------");
console.log(employee1, Department.fiscalYear);
console.log("--------------DEPARTMENT----------------");

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

const it = new ITDepartment("d1", ["Song"]);

it.addEmployee("Song");
it.addEmployee("M");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();
console.log("--------------IT----------------");
console.log(it);
console.log("--------------IT---------------");

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  // enforcing class to create exactly one object
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  //overriding
  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Song") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Song");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

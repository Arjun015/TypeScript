"use strict";
// Program 1 
class Student {
    constructor(rollNo, school) {
        this.rollNo = rollNo;
        this.school = school;
        this.year = Student.currentYear;
    }
    static admitStudent(name) {
        return { fullname: name };
    }
}
Student.currentYear = 2023;
console.log(Student.currentYear);
console.log(Student.admitStudent("Arjun Jadhav"));
//console.log(Student)
// Program 2 
class Company {
    constructor(branchId, branchName) {
        this.branchId = branchId;
        this.branchName = branchName;
        this.Year = Company.goldenYear;
    }
    static createEmployee(name) {
        return { fullName: name };
    }
}
console.log(Company.goldenYear);
console.log(Company.createEmployee('Ramchandra Maharshi'));
//console.log(Company)
//---------------- { Singleton  Pattern } -------------------
// Program 1 
class Accounting {
    constructor(accNo, report) {
        this.accNo = accNo;
        this.report = report;
    }
    static getInstance() {
        if (Accounting.instance) {
            return this.instance;
        }
        this.instance = new Accounting(12, '2020');
        return this.instance;
    }
}
// let account = new Accounting(34,'4034')
// console.log(account)
// let account1 = new Accounting(3434,'4032w4')
// console.log(account1)
let z1 = Accounting.getInstance();
let z2 = Accounting.getInstance();
console.log(z1);
console.log(z2);

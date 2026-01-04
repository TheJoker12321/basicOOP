export class Employee {

    #salary

    constructor(salary) {

        this.#salary = salary

    }

    getSalary() {

        return this.#salary

    }

    work() {

        console.log(`Employee is working`);
        
    }

}
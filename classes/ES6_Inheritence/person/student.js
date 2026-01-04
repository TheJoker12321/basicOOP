import { Person } from "./person.js";


export class Student extends Person {

    constructor(name, school) {

        super(name)

        this.school = school
    
    }

    study() {

        console.log(`${this.name} is studying at ${this.school}`);
        
    }
    
}
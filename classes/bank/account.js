export class BankAccount {

    constructor(owner, balance) {

        this.owner = owner
        this.balance = balance

    }

    deposit(amount) {

        this.balance += amount

    }

    withdraw(amount) {

        if (this.balance - amount >= 0) {

            this.balance -= amount

        }

        throw new Error('You do not have enough money');
        
    }

    checkBalance() {

        console.log(`Balance: ${this.balance}`);
        
    }

}
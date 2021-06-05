let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(trans) {
    this.transactions.push(trans);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;


  }

  commit() {
    if (!this.isAllowed()) return false;
    this.value;
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }

}

class Deposit extends Transaction{

  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  isAllowed() {
    if (this.account.balance - this.amount >= 0) {
      return true;
    };
    return false;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();
//console.log("transaction 1: ", t1);

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();
//console.log("transaction 2: ", t2);


console.log('Ending Balance:', myAccount.balance);
console.log("account transaction", myAccount.transactions);

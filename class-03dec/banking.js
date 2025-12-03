function BankAccount(accountNumber, accountHolder, balance) {
  this.accountNumber = accountNumber;
  this.accountHolder = accountHolder;
  this.balance = balance;
}

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    return false;
  }

  this.balance -= amount;
  return true;
};

BankAccount.prototype.deposit = function (amount) {
  if (amount < 0) {
    return false;
  }

  this.balance += amount;
  return true;
};

BankAccount.prototype.checkBalance = function () {
  return this.balance;
};

const account1 = new BankAccount("000001", "Atmanand Nagpure", 1000);

account1.deposit(-100); // won't work
account1.withdraw(100000); // won't work

account1.deposit(100);
account1.withdraw(50);

console.log(account1.checkBalance());

account1.deposit(200);
console.log(account1.checkBalance());

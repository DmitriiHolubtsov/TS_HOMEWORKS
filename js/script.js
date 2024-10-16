const BankAccount = (function() {
    // Function for creat BankAccount object

    function createAccount(initialBalance) {
      let balance = initialBalance; // Private variable to store balance
  
      // Return object with methods
      return {
        // Deposit method
        deposit(amount) {
          if (amount > 0) {
            balance += amount;
            alert(`Deposit successful. New balance: $${balance}`);
          } else {
            alert("Deposit amount must be positive.");
          }
        },
  
        // Withdraw method
        withdraw(amount) {
          if (amount > 0 && amount <= balance) {
            balance -= amount;
            alert(`Withdrawal successful. New balance: $${balance}`);
          } else {
            alert("Invalid withdrawal amount or insufficient balance.");
          }
        },
  
        // Get Balance method
        getBalance() {
          return balance;
        }
      };
    }
  
    // Return function that allow create new bank account
    return createAccount;
  })();
  
  const myAccount = BankAccount(1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(myAccount.getBalance());

  myAccount.balance = 0;
  console.log(myAccount.getBalance());
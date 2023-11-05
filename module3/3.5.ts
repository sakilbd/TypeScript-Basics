{
    //access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }
        getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balance;   // protected variables can be accessed through protected _balance but private variable s cant be accessed from child 
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

    // goribManusherAccount.id = 222;  // can modify id by this we need to fix this by any means 

    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);


}
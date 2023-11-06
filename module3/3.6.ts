{
    //getter and setter 

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        set deposit(amount: number) {

            this._balance = this._balance + amount;

        }


        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }

        //getter 
        get balance() {
            return this._balance
        }
        // getBalance() {
        //     return this._balance;
        // }
    }


    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

    // goribManusherAccount.balance = 222;  // can modify id by this we need to fix this by any means 

    // goribManusherAccount.addDeposit(20);
    // const myBalance = goribManusherAccount.getBalance();

    goribManusherAccount.deposit = 20;

    const myBalance = goribManusherAccount.balance // property er moto kore
    console.log(myBalance);


}
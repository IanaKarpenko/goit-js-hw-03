/* Задание 7 - дополнительное, выполнять не обязательно
Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для 
работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   
  getTransactionTotal(type) {},
};*/

console.log('------------------task7 start-------------------');

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        let result = {};
        if (this.maxId() === 0) {
            result.ID = 1;
        } else {
            result.ID = this.maxId() + 1;
        }
        if (type.toUpperCase() === 'DEPOSIT') {
            result.DEPOSIT = amount;
            result.WITHDRAW = 0;
        }
        if (type.toUpperCase() === 'WITHDRAW') {
            result.DEPOSIT = 0;
            result.WITHDRAW = amount;
        }
        return result;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.transactions.push(this.createTransaction(amount, 'DEPOSIT'));
        this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Снятие данной суммы невозможно, недостаточно средств");
        } else {
            this.transactions.push(this.createTransaction(amount, 'WITHDRAW'));
            this.balance -= amount;
        }
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        for (const obj of this.transactions) {
            if (obj.ID === id) {
                return obj;
            }
      }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let totalTrans = 0;
        if (type === 'DEPOSIT') {   // я не поняла данной поправки. Передается тип транзации, как в данном случае переписать
                                    // условие иначе, чтобы из различать?
                                    // Кажется, я и так использую далее свойства объекта, что вы имели в виду?
            for (const obj of this.transactions) {
                totalTrans += obj.DEPOSIT;
            }
        }
        if (type === 'WITHDRAW') {
            for (const obj of this.transactions) {
                totalTrans += obj.WITHDRAW;
            }
        }
        return totalTrans;
    },

    // for proper unique IDs of transactions
    maxId() {
        let max = 0;
        for (const obj of this.transactions) {
            if (max < obj.ID) {
                max = obj.ID; 
            }
        }
        return max;
    }
};

// testing createTransaction
console.log("testing createTransaction");
const tran = account.createTransaction(100, 'DEPOSIT');
console.log(tran);

// testing deposit
console.log("");
console.log("testing deposit");
console.log("before:");
console.log(`Balance: ${account.balance}, Transactions history: ${account.transactions}`);
account.deposit(100);
console.log("after deposit(100):");
console.log(`Balance: ${account.balance}, Transactions history:`);
for (const obj of account.transactions) {
    console.log(obj);
}

// testing withdraw
console.log("");
console.log("testing withdraw");
console.log("before deposit(50):");
console.log(`Balance: ${account.balance}, Transactions history:`);
for (const obj of account.transactions) {
    console.log(obj);
}
account.withdraw(50);
console.log("after deposit(50):");
console.log(`Balance: ${account.balance}, Transactions history:`);
for (const obj of account.transactions) {
    console.log(obj);
}
console.log("before deposit(500):");
account.withdraw(500);
console.log("after deposit(500):");
console.log(`Balance: ${account.balance}, Transactions history:`);
for (const obj of account.transactions) {
    console.log(obj);
}

// testing getBalance()
console.log("");
console.log("testing getBalance()");
console.log(`Current balance is ${account.getBalance()}`);

// testing getTransactionDetails(id)
console.log("");
console.log("testing getTransactionDetails(id)");
console.log("Returning transaction with ID=2:");
console.log(account.getTransactionDetails(2));
console.log("Returning transaction with ID=1:");
console.log(account.getTransactionDetails(1));

// testing getTransactionTotal(type)
console.log("");
console.log("testing getTransactionTotal(type)");
console.log(`Total deposit: ${account.getTransactionTotal('DEPOSIT')}`);
console.log(`Total withdraw: ${account.getTransactionTotal('WITHDRAW')}`);


console.log('------------------task7 end---------------------');
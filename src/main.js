const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');


const myWalletAddress = myKey.getPublic('hex');


const newCoin = new Blockchain();


newCoin.minePendingTransactions(myWalletAddress);


const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
newCoin.addTransaction(tx1);


newCoin.minePendingTransactions(myWalletAddress);


const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
newCoin.addTransaction(tx2);


newCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${newCoin.getBalanceOfAddress(myWalletAddress)}`);





console.log();
console.log('Blockchain valid?', newCoin.isChainValid() ? 'Yes' : 'No');

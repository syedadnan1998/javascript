const accountId=1445552;
let accountEmail='adnan@gmail.com'
var accountPassword="12345"
accountCity="Delhi" 
let accountState;
// accountId=2;  not allowed
accountEmail="adnan@123.com"
accountPassword="212121"
accountCity="Banglore"
console.log(accountId);
/*
Dont use var beacuse of issue in Block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


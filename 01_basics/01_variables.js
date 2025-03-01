const accountId = 144553
let accountEmail = "farihakamal774@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;


// accountId = 2 // not allowed 

accountEmail = "fariha@gmail.com"
accountPassword = "21210"
accountCity = "Bhola"

console.log(accountId);

/*
prefer not to use var
becasue of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
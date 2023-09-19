const accountId = 234565;
let accountEmail = "ghty@gmail.com";
var accoutPassword = "234323";
accountCity = "Kolkata";
let accountState;

accountEmail = "rh@rhgmail.com";
accoutPassword = "456765";
accountCity = "Bardhaman";

// accountId = 2 Not Allowed

/*
Prefer to not use var
Because of issue in block scope and functional scope
*/

console.table([ accountId, accountEmail, accoutPassword, accountCity, accountState])

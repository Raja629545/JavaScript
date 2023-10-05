const user = {
    username : "Rajesh",
    loginCount : 8,
    isLoggedIn : true,

    getUserDetails : function(){
        // console.log("Get user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const UserOne = new User("Rajesh", 5, true);
const UserTwo = new User("Raja", 6, false);

console.log(UserOne);
console.log(UserTwo);
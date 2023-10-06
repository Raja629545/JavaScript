function SetUserName(username){
    this.username = username;
}

function createUser(username, email, password){

    SetUserName.call(this, username)   // now this hold SetuserName current context
    // call method pass current execution context to another function
    this.password = password
}

const Raja = new createUser("Raja", "raja@gmail.com", "123");
console.log(Raja);
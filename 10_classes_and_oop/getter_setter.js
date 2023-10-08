class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    set password(value){
        return this._password = value;
    }
        // here we overwrite the password in getter and setter
    get password(){
        this._password.toUpperCase();
    }
}

const User = new user("raja@gmail.com", "abc");
console.log(User.password);
console.log(User.email);
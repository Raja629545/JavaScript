const User = {
    _email : "rajesh@google.com",
    _password : "345",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);
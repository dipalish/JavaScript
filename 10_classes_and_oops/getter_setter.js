class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){// here name sholud be same
        
        return this._email.toUpperCase() // here _email instead of email otherwise it'll throw call stack excced error(name should be diff)
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}@123`
    }

    set password(value){
        this._password = value
    }
}

const  dipali = new User("d@dipali.abc" , "qaz")

console.log(dipali.email);
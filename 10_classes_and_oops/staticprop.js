class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){ // prevent it's use
        return `12345`
    }
}

const dipali = new User("Dipali")
console.log(dipali.createId());
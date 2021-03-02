class User {
    private name: String

    private age: Number

    constructor(name: String, age: Number) {
        this.name = name
        this.age = age
    }

    getName(): String {
        return this.name
    }
}

interface UserInteface {
    name: String
    age: Number
}

const item: UserInteface = {
    name: 'Christian',
    age: 10,
}

const user = new User(item.name, item.age)

function sayHello(user: User) {
    console.log(`Hello ${user.getName()}`)
}

sayHello(user)

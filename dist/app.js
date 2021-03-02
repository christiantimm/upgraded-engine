var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    ;
    return User;
}());
var item = {
    name: "Christian",
    age: 10
};
var user = new User(item.name, item.age);
function sayHello(user) {
    console.log("Hello " + user.getName());
}
sayHello(user);

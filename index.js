"use strict";
function ConstructObj(name, message) {
    let obj = {
        name: name,
        message: message,
        overwrite: (name, message) => {
            obj.name = name;
            obj.message = message;
            return obj;
        }
    };
    return obj;
}
const talha = ConstructObj("Talha", "Hello");
talha.overwrite("TT", "Hello 2");
console.log(talha);
class Student {
    constructor(name, message = "Hello") {
        this.name = name;
        this.id = 0;
        this.age = 0;
        this.language = "Urdu";
        this.name = name;
        this.message = message;
    }
    get studentGetter() {
        return { message: this.message, name: this.name };
    }
    set studentGetter(param) {
        if (param.name == "Askari") {
            this.name = param.name;
            return;
        }
        this.message = param.message;
    }
    overwriteMessage(message) {
        this.message = message;
    }
}
let student = new Student("Talha", "Hello");
student.overwriteMessage("We are here!");
student.studentGetter = { name: "Askari", message: 'Hello' };
// console.log(student.studentGetter);
class Hamza extends Student {
    constructor(name, location) {
        // constructor(name: string, public location: string) {
        // constructor(name: string, message: string) {
        super(name, " My Message"); // You have call super at top
        this.specialStudent = true;
        this.location = location;
    }
}
let hamza = new Hamza("Hamza", "Karachi, Pakistan");
console.log(hamza);
let obj = {
    name: "Talha",
    message: "msg",
};
let obj2 = {
    name: "Askari",
    message: "msg 2",
    status: "abc"
};
function add(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
console.log(add("a", "B", "c"));

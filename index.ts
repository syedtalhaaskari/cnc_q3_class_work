interface IConstructorObj {
    name: string;
    message: string;
}

interface IConstructorObjReturn extends IConstructorObj {
    overwrite: (name: string, message: string) => IConstructorObj
}

function ConstructObj(name: string, message: string): IConstructorObjReturn {
    let obj = {
        name: name,
        message: message,
        overwrite: (name: string, message: string) => {
            obj.name = name;
            obj.message = message;
            return obj
        }
    }
    return obj;
}

const talha = ConstructObj("Talha", "Hello");
talha.overwrite("TT", "Hello 2")

console.log(talha);

class Student {
    private id: number = 0;
    // name: string;
    message: string;
    age = 0;
    language = "Urdu"

    constructor(public name: string, message: string = "Hello") { // here public keyword creates property name automatically
        this.name = name;
        this.message = message;
    }

    get studentGetter(): IConstructorObj { // You will get an error if you do not return anything from this function
        return { message: this.message, name: this.name }
    }

    set studentGetter(param: IConstructorObj) {
        if (param.name == "Askari") {
            this.name = param.name
            return
        }
        this.message = param.message
    }

    overwriteMessage(message: string) {
        this.message = message
    }
}

let student = new Student("Talha", "Hello");
student.overwriteMessage("We are here!");
student.studentGetter = { name: "Askari", message: 'Hello' }
// console.log(student.studentGetter);

class Hamza extends Student { // Inheriting all properties of Student class into Hamza
    specialStudent = true;
    location;
    constructor(name: string, location: string) {
        // constructor(name: string, public location: string) {
        // constructor(name: string, message: string) {
        super(name, " My Message"); // You have call super at top
        this.location = location
    }
}

let hamza: Student = new Hamza("Hamza", "Karachi, Pakistan");
console.log(hamza);

interface Iobj {
    name: string;
    message: string;
}

interface Iobj2 {
    name: string;
    message: string;
    status: string;
}

let obj: Iobj = {
    name: "Talha",
    message: "msg",
}

let obj2: Iobj2 = {
    name: "Askari",
    message: "msg 2",
    status: "abc"
}

// obj = obj2

// obj  = {
//     name: "Talha",
//     message: "msg",
//     status: "abc"
// }

// obj2 = obj

function add(a: string, b: string): string;
function add(a: string, b: string, c: string): number;
function add(a: any, b: any, c?: string) {
    if (c) {
        return a + b + c
    }
    return a + b
}
console.log(add("a", "B", "c"));

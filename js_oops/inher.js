
// parent class:
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        console.log(`Person class constructor`);
    }

    talk() {
        console.log(`Hi I am ${this.name}`);
    }
}

// child class
class Student extends Person { // inherit from parent Person
    constructor(name, age, marks) {
        console.log(`Student class constructor`);
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        console.log(`Teacher class constructor`);
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }
}


// if child clas amin same name fxn bana to wo parnet ko override krdega and that will be called  
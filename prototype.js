var a = {
    name: "a",
    log: function () {
        console.log(this.name)
    }
};

var b = {
    name: "b"
};

console.log("没有继承a的属性");
console.log(b.__proto__);
console.log(b.log);

b.__proto__ = a;
console.log("继承a的属性");
console.log(b.__proto__);
console.log(b.log);

// 继承的实现
console.warn("通过原型实现类型继承");

var Person = function () {
    this.name = "a";
    this.call = function () {
        console.log("作为属性的call方法", this.name);
    }
};

console.log(Person.prototype, Person.__proto__);

Person.prototype = {
    log: function () {
        console.log(this.name)
    },
    call: function () {
        console.log("name => ", this.name)
    }
};

var instancePerson = new Person();

console.log(instancePerson.prototype, instancePerson.__proto__);
console.log(instancePerson.call);
instancePerson.call();

console.log();
var Student = function () {
    this.school = "augmentum"
};

Student.prototype = instancePerson;    // 继承方法和属性
// Student.prototype = Person.prototype;   // 只继承方法
Student.prototype.log = function () {
    console.log(this.name, this.school)
};

// 赋值原型后修改父级原型实现
Person.prototype.call = function () {
    console.log("new call", this.name);
};

instancePerson.call = function () {
    console.log("新的属性call", this.name)
};

var instanceStudent = new Student();
console.log("__proto__ => ",instanceStudent.__proto__);
instanceStudent.call();
instanceStudent.log();

console.log(instanceStudent.hasOwnProperty("name"));
console.log(instanceStudent.hasOwnProperty("school"));  // hasOwnProperty 只判断自己原型所拥有的属性，而不会在父级原型链上去查找


console.log(Person.prototype.isPrototypeOf(instanceStudent));
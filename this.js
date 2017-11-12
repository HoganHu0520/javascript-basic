/**
 * 对象自调用
 */
var point = {
    x : 0,
    y : 0,
    moveTo : function(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
        console.log(this.x, this.y);
    }
};

point.moveTo(1, 1); //this 绑定到当前对象，即 point 对象


(function(move, x, y) {
    move(x, y); // 函数在这里执行，所以this的值是全局对象
})(point.moveTo, 10, 10);

/**
 * 全局对象绑定到this
 */
var x = 0;

function test() {
    this.x = 10;
    console.log(this);  // 这里注意在浏览器中this是window，但是在node环境中他是node全局对象
}

test();

console.log(x);
console.log(this); // 浏览器中this是window，node下是一个空对象

/**
 * 构造函数调用
 */

var num = 2;
function Num(){
    this.num = 1;
}
var numObj = new Num(); // 作为构造函数的时候this指向新创建的对象
console.log(numObj);

/**
 * apply 和 call 调用
 * 这种调用方式是指定函数执行的上下文
 */
var someone = {
    name: "Bob",
    showName: function(){
        console.log(this.name);
    }
};

var other = {
    name: "Tom"
};

someone.showName();     //Bob
someone.showName.apply();    //window
someone.showName.call();
someone.showName.apply(other);    //Tom
someone.showName.call(other);

/**
 * ES6 箭头函数的this
 */
var o = {
    x : 1,
    func : function() { console.log(this.x) },
    test : function() {
        setTimeout(function() {
            this.func();    // 此时this是全局对象
        }, 100);
    },
    test1: function () {
        var _this = this;
        setTimeout(function() {
            _this.func();    // 此时this是执行test1方法的上下文对象
        }, 100);
    }
};

// o.test(); // TypeError : this.func is not a function
o.test1();

var es6o = {
    x : 1,
    func : function() { console.log(this.x) },
    test : function() {
        setTimeout(() => { this.func() }, 100); // ES6 语法中，this一直代表是函数定义时的this
    }
};

es6o.test();
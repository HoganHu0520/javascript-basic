function f1(){
    var n=999;
    nAdd = function() {n+=1};

    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 999
nAdd();
result(); // 1000

/**
 * 因为闭包的存在所以i的内存不会释放，单由于异步操作所以i的值一直都没有被使用，直到闭包开始执行的时候才开始使用i。
 * 这导致了一个问题，i在闭包执行前已经被修改了值，无法记录闭包被定义的时候的值。
 * 我们此时要考虑在闭包定义的时候就将i的值记录下来，这里通过立即执行函数来解决。
 */
function f2() {
    for(var i = 0; i < 10; i++) {
        (function (n) {
            setTimeout(function () {
                var num = n;
                console.log(num);
            }, 100);
        })(i);
        // setTimeout(function () {
        //     var num = i;
        //     console.log(num);
        // }, 100);
    }
}

f2();

/**
 * 数组与对象值传递的证明
 */
var v1 = [];
var v2 = {};
var v3 = {};
var v4 = "string";
function foo(v1, v2, v3, v4)
{
    v1 = [1];
    v2 = [2];
    v3 = {a:3};
    v4 = v4 + "1";
}

function foo1(v1, v2, v3) {
    v1[0] = 1;
    v2.a = 2;
    v3.a = 3;
}

foo(v1, v2, v3);
console.log(v1); // 空白
console.log(v2); // [object Object]
console.log(v3.a); // undefined
console.log(v4);

foo1(v1, v2, v3);
console.log(v1); // [1]
console.log(v2); // {a:2}
console.log(v3.a); // 3
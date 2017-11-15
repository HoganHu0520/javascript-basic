var hello = "hello world";

(function () {
    hi = "hi";  // 没有var关键字，自动提升到全局作用域
    console.log(hello);
    // var hello = "hello augmentum";   // 变量提升，所有的变量定义都会在代码执行时将其声明提升到对应函数的顶部。
})();

(function () {
    var hello;
    console.log(hello);
    hello = "hello augmentum";
})();


if (true) {
    var hello = "hello if"; // 变量提升，因为javascript是函数作用域，所以变量提升后可以当前全局函数作用域只存在一个hello的声明。
}

console.log(hello);
console.log(hi);

/**
 * 函数提升
 * 将整个函数都提升都当前函数作用域的前面
 * 只有函数声明才会被提升，函数变量是不会被提升的
 */

test();

function test() {
    console.log("test function");
}


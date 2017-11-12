var a = 100;
var b = "1";
var c = [1, 2];
var c1 = ["1", "2"];
var c2 = [3, 4];
var d = {hello: "hello"};
var e = function () {
    console.log("function");
};

console.log("a => ", a, typeof a);
console.log("b => ", b, typeof b);
console.log("c => ", c, typeof c);
console.log("d => ", d, typeof d);
console.log("e => ", e, typeof e);

console.log();
console.log('a + b => ', a + b, typeof (a + b));

console.log();
console.log('b + c => ', b + c, typeof (b + c));
console.log('a + c => ', a + c, typeof (a + c));
console.log('c + d => ', c + d, typeof (c + d));
console.log('d + c => ', d + c, typeof (d + c));
console.log('c + c2 => ', c + c2, typeof (c + c2));
console.log('a + c1 =>', a + c1, typeof (a + c1));   // int 与 object 运算都隐式转换为string进行运算
console.log('a + e =>', a + e, typeof (a + e));
console.log();
console.log(a + d, typeof (a + d));

console.log();
console.log("100 - 1", "100" - "1", typeof ("100" - "1"));

if (d) {
    console.log("true");
}
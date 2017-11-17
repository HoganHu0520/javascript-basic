for (var i = 0; i < 10; i++) {

}

for (let j = 0; j < 10; j++) {
    // let 只在块级作用域内有效
    {
        let j = 0;  // 此处的j只在新的块级作用域有效
        console.log("inside", j);
    }

    // console.log("outside", j);

    let j = 0;  // let 不存在变量提升， 而此处的j的作用域在for循环内，声明在后，而使用在前，会产生错误。
    let j = 1;  // 同一作用域内不可声明多个同名let变量

    const n = 100;  // const的特性与let基本相同，唯一不同的部分在于常量不需在声明的时候同时赋值，并且不能修改值。但是常量如果指向一个对象，那么对象可以修改。

}

console.log(i);
    // console.log(j);


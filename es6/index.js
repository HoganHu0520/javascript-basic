{
    let [a, b, c] = [1, 2, 3];  // a = 1, b = 2, c= 3
}

{
    let [a, b, c] = [1, 2, 3, 4];   // a = 1, b = 2, c= 3
}

{
    let [a, b, c] = [1, 2];   // a = 1, b = 2, c= undefined
}

{
    let [foo, [[bar], baz]] = [1, [[2], 3]];    // 嵌套数组依旧可行
}

{
    let [ , , third] = ["foo", "bar", "baz"];   // 省略一部分
}

{
    let [head, ...tail] = [1, 2, 3, 4]; // 与...语法结合使用，可以将数组切片进行赋值
}

{
    let [x, y, ...z] = ['a'];   // 采用...语法后相当于已经将变量z初始化为空数组
}

{
    // 结构模式必须相同，否则报错。数组对应数组，对象对应对象
    let [foo] = 1;
    let [foo] = false;
    let [foo] = NaN;
    let [foo] = undefined;
    let [foo] = null;
    let [foo] = {};
}

{
    // 数组的结构赋值其实是通过Iterator实现的，所以从本质上讲，所有具有的Iterator的结构都可以通过这种方式给数组赋值
    let [x, y, z] = new Set(['a', 'b', 'c']);   // Set 具有迭代器
}
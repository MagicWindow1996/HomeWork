//sea 的模块化必须包含在一个define 中
define( function(require, exprots,module) {
    //exprots 用于对外输出
exprots.a =12;
exprots.b = 5;

//module  其中的exprots就是上面exprots引用。  
module.exprots = {
a= 10 ,
b =9,
show(){}

};




//require用于引用其它模块
let a = require("mod2");



});


let a = 12;//  直接定义出不去的

let b = 5;
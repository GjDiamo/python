let matchUntil = require("./libs/mathUntil");
//(1) ./是指回到根目录->到libs文件下——》找到machUntil
//(2)  调用封装好的放法；
let add = matchUntil.add(2,5);
console.log(add);
console.log(matchUntil.multi(10,10));
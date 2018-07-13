 let crypto = require('crypto');
// //创建 md5 加密方法
// let md5 = crypto.createHash("md5");
// //创建 sha 256 加密方法
// let sha256=crypto.createHash("sha256");
// let data = '今夜去小树林，带上东西';
// //分别两种加密方法加密；-》输出的结果会是对象；
// let result= sha256.update(data);
// let result2=md5.update(data);
// //分别将对象加密信息转化成16进制；
// let x = sha256.digest("hex");
// let y=md5.digest("hex");
// console.log(x);
// console.log(y);

//Aes 对称算法；重点理解
 //加密对象
let data= '今天是李敏的生日';
//加密key
let key ="baby"
 //对称加密方法；
const cipher = crypto.createCipher("aes192",key);
//加密对象
let encrypated = cipher.update(data,"utf-8",'hex');
// 用final进行终极赋值
encrypated+=cipher.final('hex');
console.log(encrypated);


let stat ="洛希达多耶路拉普达";
let key1 ='123';
let cipher1 = crypto.createCipher("aes192",key1);
let encrypated1 = cipher1.update(stat,'utf-8','hex');
encrypated1+=cipher1.final('hex');
console.log(encrypated1);

//解密步骤；
//1.解密方法；
 const decipher =crypto.createDecipher('aes192',key);
 //2.被解密对像；
 let encrypateData='ecab18d8b5610564dfc023554fb8b1e88077824cc909b40f19708bffa853d713';
 //3.执行解密
 let s = decipher.update(encrypateData,'hex','utf-8');
 //4.最终方法域输出
 s+=decipher.final('utf-8')
 console.log(s);

 const decipher1 = crypto.createDecipher("aes192",key1);
 let encryateDate2='939cbdb72977a8935ea7f6905759bccebf52cfe11ca1fa5f62cb5c363d2516f2';
 let s1 = decipher1.update(encryateDate2,'hex',"utf-8");
 s1+=decipher1.final('utf-8');
 console.log(s1);
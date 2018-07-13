let crypto = require('crypto');


let stat ="洛希达多耶路乌鲁拉普达";
let key ='123';
let cipher = crypto.createCipher("aes192",key);
let encrypated = cipher.update(stat,'utf-8','hex');
encrypated+=cipher.final('hex');
console.log(encrypated);


const decipher1 = crypto.createDecipher("aes192",key);
let encryateDate2='939cbdb72977a8935ea7f6905759bcced4ef009ac912a46e0e817652f46960104008cebccc042939a3c256c9a9231efe';
let s1 = decipher1.update(encryateDate2,'hex',"utf-8");
s1+=decipher1.final('utf-8');
console.log(s1);

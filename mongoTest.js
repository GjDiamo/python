//调用库
let mongoose = require("mongoose");
//使用模版
let User = require("./mongooseType");
//链接数据库；
mongoose.connect("mongodb://127.0.0.1:27017/test");
let db =mongoose.connection;
db.on('error',err=>{
    console.log("数据链接有错误")
    });
db.once('open',()=>{//打开数据库之后给他指定方法；
    console.log("数据库交接成功")
    //testInsert();
    //testCurd();
    highOrderQuery()

})
// async function testInsert() {
//      // let res =await User.create({
//      //     name:'郭海蛟',
//      //     age:18,
//      // })
//     let arr=[{name: '李连杰' ,age:55,address:'beijing',fav:['电影']},
//             {name:'cc',age:33,address:'3c',fav:['33',"44"]}]
//     let res=await User.create(arr);
//     console.log("创建完毕");
//
// }
async  function testCurd() {
    let res =await User.findOne({
        name:'李连杰'
    })
    console.log(res);
}
// async  function highOrderQuery() {
//     let res=await  User.find()...
// }

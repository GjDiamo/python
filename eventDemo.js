//触发器触发事件来调用函数（监听器)；
let EventEmitter = require('events');
class  MyEmitter extends EventEmitter{}
let myEmitter = new MyEmitter();
//注册xxx事件
myEmitter.on('aaa',(a)=>{
    console.log("aaa事件被触发"+a)
})
setTimeout(()=>{
  myEmitter.emit('aaa','这道题的逻辑是什么鬼？')
},100)

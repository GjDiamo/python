const mongoose = require('mongoose')
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('连接mongodb成功！');
});
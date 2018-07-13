//触发器触发事件来调用函数（监听器)；
let http = require("http");
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
let fs = require('fs');
let path = require('path');
let EventEmitter = require('events');

class GirlSpider extends EventEmitter {
    //获取html；
    getHtml() {
        http.get("http://www.27270.com/ent/meinvtupian/", res => {
            //下载到的都是块级元素
            let data = [];
            res.on('data', chunk => {
                data.push(chunk);
            })
            res.on('end', () => {
                //对网页进行编译；转换格式
                let html = iconv.decode(Buffer.concat(data), 'gbk');
                // 解码完毕不去直接调用相关方法，而通过事件来通知
                this.emit("getHtmlFinished", html);
                 //console.log(html);
            })
        })
    }
    //提取数据
    pushHtmlData(html) {
        //console.log(html)
        //获取资源的方法；
        let $ = cheerio.load(html);
        //调用方法并且赋值给数组
        let arr = $('div.MeinvTuPianBox>ul>li>a>i>img').toArray();
        console.log(arr.length)
        let imgData = [];
        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i];
            let src = $(obj).attr("src");
            let title = $(obj).attr("alt")
            imgData.push({
                src, title
            })
        }
        this.emit("pushHtmlDataFinished", imgData)
        console.log("提取到了数据"+imgData.length)
    }
    //下载图片的方法；
    downLoadImgs(imgData) {
         console.log("haha")
        console.log(imgData);
         imgData.forEach(imgObj => {
            http.get(imgObj.src,res =>  {
                //将文件读取出来；
                console.log('hehe2')
                let imgPath = path.join("imgs2", imgObj.title + path.extname(imgObj.src))
                console.log(imgPath);
                let write = fs.createWriteStream(imgPath);
                res.pipe(write);
                 console.log("下载到了图片")
            });
        });
    }
      //初始化监听注册器；
    start(){
        this.on('getHtmlFinished',(html)=>{
             this.pushHtmlData(html)
        });
        this.on('pushHtmlDataFinished',(imgData)=>{
              this.downLoadImgs(imgData)
        });
        this.getHtml();
    }
}
let girlSpider = new GirlSpider();

    girlSpider.start();
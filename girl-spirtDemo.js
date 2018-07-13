//爬虫；
//http get请求 下载图片；
//四个步骤
let http = require('http');//网络请求
let iconv = require('iconv-lite');//乱码处理
let cheerio = require('cheerio');//数据提取
let fs = require('fs');//文件读取
let path = require('path');//路由
//1. 先拿到目标网址的html内容
http.get('http://www.27270.com/ent/meinvtupian/', res => {
   //获取的文件都是chunk
    let data=[];
    res.on('data',chunk => {
        data.push(chunk);
    });
    res.on('end',()=>{
        //2.如果网页内容有乱码，就进行乱码的处理
        // 对data进行解码
        let html = iconv.decode(Buffer.concat(data),'gbk');
        //console.log(html);
        //3. 从html的dom结构中提取出需要的数据，就是图片的src和标题
        //调用下面的的方法；
        let imgData = extraDataFromHtml(html);
        //4.下载图片
        //调用下面的方法；
        downloadImage(imgData);
    });
});

//提取数据的方法；
function extraDataFromHtml(html) {
  let $= cheerio.load(html);
  let arr = $('div.MeinvTuPianBox>ul>li>a>i>img').toArray();
  let imgData=[];
  for(let i=0;i < arr.length;i++) {
      let obj=arr[i];
      let src = $(obj).attr("src");
      let title = $(obj).attr("alt");
      imgData.push({
          src,title
      })
  } return imgData;
}
//下载图片的方法；
function downloadImage(imgData) {
    imgData.forEach(imgObj => {
        http.get(imgObj.src,res => {
            let imgPath = path.join("imgs",imgObj.title+path.extname(imgObj.src))
            let writer=fs.createWriteStream(imgPath);
            res.pipe(writer);
        });
    });

}

'use strict';
let fs = require("fs");
let files=fs.readdirSync(".");
let path = require('path');
let color=process.argv[2];
if(!color){
    console.error("Need color as first argument.");
    return;
}
try{
    fs.mkdirSync(path.join(__dirname,color));
}catch(e){
    
}

files.forEach(function(v,i){
    if(!v.match(/.svg/))
        return;
    let fileName=path.join(__dirname, v);
    let content=fs.readFileSync(fileName).toString();
    if(content.match(/style="/)){
        content=content.replace(/style="([\s\S]+?)"/g,function(s,s1){return `style="${s1};fill:${color};"`});
    }else{
        content=content.replace(/<svg version=/g,`<svg style="fill: ${color}" version=`);
    }
    
    fs.writeFileSync(path.join(__dirname, color,v),content);
})
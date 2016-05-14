var ttt=1;
function* miao(){
    yield console.log("m");
    yield console.log("n");
}
function* countc(){
    yield console.log("1");
    yield console.log("2");
    yield console.log("3");
    var i=yield console.log("q");
    console.log("i",i);
	if(ttt==1){
	    yield console.log("a");
	}else{
	    yield console.log("b");
	}
    yield console.log("4");
    yield console.log("5");
}
var count=countc();
setInterval(function(){
    count.next(5).value
},500)
setTimeout(function(){
    ttt=2;
},1000)




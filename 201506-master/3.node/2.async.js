var count =0;
var eatBao = function(){
    setTimeout(function(){
        console.log('包子');
        if(++count==2){
            done();
        }
    },1000)
}

var eatCucumber = function(){
    setTimeout(function(){
        console.log('黄瓜');
        if(++count==2){
            done();
        }
    },2000)
}

var done = function(){
    console.log('吃完饭了');
}

eatBao();
eatCucumber();
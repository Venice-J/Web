

function rangeColor(){
    return '#'+Math.trunc(Math.random()*1000000)
}

// 背景顏色
// 指定顏色
document.querySelector('.bgColor').onchange=function(){
    document.querySelector('.countDown').style.backgroundColor = document.querySelector('.bgColor').value
}
// 隨機顏色
document.querySelector('.bgRange').addEventListener('click',function(){
    document.querySelector('.countDown').style.backgroundColor=rangeColor()
})

// 透明度
document.querySelector('.opacity').onchange=function(){
    document.querySelector('.countDown').style.opacity=document.querySelector('.opacity').value
}

// 全螢幕
document.querySelector('.fullScreen').addEventListener('click',function(){
    document.documentElement.requestFullscreen()
    document.querySelector('.fullScreen').style.display = 'none'
    document.querySelector('.endFullScreen').style.display = 'block'
    
    // 置頂
    document.body.scrollTop =0;
    document.documentElement.scrollTop = 0;
    
    //隱藏設定
    document.querySelector('.backgroundSetting').style.display = 'none'
    
})

// 結束全螢幕
document.querySelector('.endFullScreen').addEventListener('click',function(){
    document.exitFullscreen()
    document.querySelector('.endFullScreen').style.display = 'none'
    document.querySelector('.fullScreen').style.display = 'block'
    document.querySelector('.backgroundSetting').style.display = 'flex'
})



// 文字設定
// 指定文字顏色
document.querySelector('#textColor').onchange=function(){
    document.querySelector('div.timer').style.color = document.querySelector('.textColor').value;
}

// 隨機文字顏色
document.querySelector('.textRange').addEventListener('click',function(){
    document.querySelector('div.timer').style.color=rangeColor();
})


// 文字大小
document.querySelector('#textSize').onchange=function(){
    document.querySelector('div.timer').style.fontSize =document.querySelector('#textSize').value +"rem";
}

// document.querySelector('.opacity').onchange=function(){
//     document.querySelector('.countDown').style.opacity=document.querySelector('.opacity').value
// }



// 倒數計時程式碼


function counting(){
    if ( document.querySelector('.timerSec').innerHTML != 0){
        document.querySelector('.timerSec').innerHTML-- ;
    }else if( document.querySelector('.timerSec').innerHTML == 0 && document.querySelector('.timerMin').innerHTML != 0){
        document.querySelector('.timerMin').innerHTML--;
        document.querySelector('.timerSec').innerHTML = 59 ;
    }else if (document.querySelector('.timerMin').innerHTML == 0 && document.querySelector('.timerHour').innerHTML != 0){
        document.querySelector('.timerHour').innerHTML -- ;
        document.querySelector('.timerMin').innerHTML = 59 ;
        document.querySelector('.timerSec').innerHTML = 59 ;
    }else{
        document.querySelector('.timerHour').innerHTML = '00';
        document.querySelector('.timerMin').innerHTML = '00' ;
        document.querySelector('.timerSec').innerHTML = '00' ;
    }


    if(document.querySelector('.timerSec').innerHTML< 10  && document.querySelector('.timerSec').innerHTML != "00"){
        document.querySelector('.timerSec').innerHTML = "0" + document.querySelector('.timerSec').innerHTML
    }

    // if(document.querySelector('.timerMin').innerHTML< 10  && document.querySelector('.timerMin').innerHTML != "00"){
    //     document.querySelector('.timerMin').innerHTML = "0" + document.querySelector('.timerMin').innerHTML
    // }
    // if(document.querySelector('.timerHour').innerHTML< 10  && document.querySelector('.timerHour').innerHTML != "00"){
    //     document.querySelector('.timerHour').innerHTML = "0" + document.querySelector('.timerHour').innerHTML
    // }

}


// 按出送出
document.querySelector('.submit').addEventListener('click',function(){
    document.querySelector('.timerHour').innerHTML = document.querySelector('#hour').value.padStart(2,'0')
    document.querySelector('.timerMin').innerHTML = document.querySelector('#min').value.padStart(2,'0')
    document.querySelector('.timerSec').innerHTML = document.querySelector('#sec').value.padStart(2,'0')

// 開始倒數
setInterval(() => {
    counting();
}, 500);

})



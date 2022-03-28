

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

// 抓取設定倒數計時時間
document.querySelector('.timerHour').innerHTML = document.querySelector('#hour').value;
document.querySelector('#hour').addEventListener('input',(el)=>{
    document.querySelector('.timerHour').innerHTML = el.target.value;
})

document.querySelector('.timerMin').innerHTML = document.querySelector('#min').value;
document.querySelector('#min').addEventListener('input',(el)=>{
    document.querySelector('.timerMin').innerHTML = el.target.value;
})

document.querySelector('.timerSec').innerHTML = document.querySelector('#sec').value;
document.querySelector('#sec').addEventListener('input',(el)=>{
    document.querySelector('.timerSec').innerHTML = el.target.value;
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
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");



let hour = 0;
let minute = 0;
let second = 0;

start.addEventListener('click', function(){
    Watchstart();
});

stop.addEventListener('click', function(){
    Watchstop();
});

reset.addEventListener('click', function(){
    Watchreset();
});
let timer;
function Watchstart(){
    if(!timer)
    timer = setInterval(stopWatch,1000);
}

function stopWatch(){
    second++;
    if(second==60){
        second = 0;
        minute++;
    }
    if(minute == 60){
        minute = 0;
        hour++;
    }
    let h = hour<10?"0" + hour : hour ;
    let m = minute<10?"0" + minute : minute ;
    let s = second<10?"0" + second : second ;
    document.querySelector(".hour").innerHTML = h;
    document.querySelector(".minute").innerHTML = m;
    document.querySelector(".second").innerHTML = s;
}

function Watchstop(){
    clearInterval(timer);
    timer = null;
}
function Watchreset(){
    clearInterval(timer);
    hour = 0;
    minute = 0;
    second =0 ;
    document.querySelector(".hour").innerHTML = "00";
    document.querySelector(".minute").innerHTML = "00";
    document.querySelector(".second").innerHTML = "00";
}

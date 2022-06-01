

const dayEl=document.getElementById('days');
const hourEl=document.getElementById('hours');
const minuteEl=document.getElementById('minute');
const secondEl=document.getElementById('second');

const newYear='1 jan 2023';

function countDown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();


    const totalSeconds=(newYearDate-currentDate)/1000;
    const day=Math.floor(totalSeconds/3600/24);
    const hour=Math.floor(totalSeconds/3600/24)%24;
    const minute=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds%60);


    dayEl.innerHTML=day;
    hourEl.innerHTML=formatTime(hour);
    minuteEl.innerHTML=formatTime(minute);
    secondEl.innerHTML=formatTime(seconds);




    function formatTime(time){
       return time<0 ? (`0${time}`):time;
    }
}

countDown();
setInterval(countDown,1000);

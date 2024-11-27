function clock(){
const now = new Date();
const hour = now.getHours().toString().padStart(2,0);
const min = now.getMinutes().toString().padStart(2,0);
const sec=now.getSeconds().toString().padStart(2,0);
let templete=`${hour}:${min}:${sec}`;
let clock=document.getElementById("clock")
clock.textContent=templete;
}
setInterval(clock,1000);

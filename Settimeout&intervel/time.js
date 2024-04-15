let message1=document.querySelector('#msg-1');
let message2=document.querySelector('#msg-2');
let Ctimeout=document.querySelector('#C-time');
  
let CTimeoutID=setTimeout (()=>{
  message1.style="color:purple";
  message2.style="color:green";
},3000);

Ctimeout.addEventListener("click",()=>{
    clearTimeout(CTimeoutID);
});
let count=1;
let sintervalID=setInterval(()=>{
    Time.innerHTML=count;
    if(count==3){
        clearInterval(stnterval);
    }
    count++;

},2000);


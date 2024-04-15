function sayclick(){
    console.log("Divya");
}

// Alert:
let result=document.querySelector(".res-div");
console.log(result);
//it don't returne anything; 
function exe_alert(){
    alert('Hi i am there!')
}

//confirm:
function exe_confirm(){
   let con_res= confirm("Do you want to continue");
   if(con_res){
    result.innerText="User want's to continue";
   }else{
    result.innerText="User want's to cancel";
   }
   
}

//prompt:
//It return the given input fields value as string or (null)
function exe_prompt(){
let pro_res=prompt("Hi what is your name?");
if(!pro_res){
    result.innerText=`User cancle the opration`;
}else{
    result.innerText=`User name is ${pro_res}`
}
}

//SetTimeOut and setinterval:
//  
//setTimeout:
//syntex=setTimeOut(function(){},interval)
function Myfunction(){
    setTimeout(()=>{
        console.log("welcome to my home")
    },2000)
    console.log("welcome to palani")
}
Myfunction();



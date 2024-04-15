

//Get the datas by using fetch.
fetch("https://foodish-api.com/images/dosa/dosa31.jpg")
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

//get the elements using the selector.
let Button1=document.getElementById("Btn1");
console.log(Button1);

let Button2=document.getElementById("Btn2");
console.log(Button2);

let Button3=document.getElementById("Btn3");
console.log(Button3);

let Button4=document.getElementById("Btn4");
console.log(Button4);

let Button5=document.getElementById("Btn5");
console.log(Button5);

//settimeout function for  buttons.
function TimingData1(){
 setTimeout(()=>{
  Button1.innerHTML="Masala Dosai";
    },1000);
    

}TimingData1();
function TimingData2(){
    setTimeout(()=>{
     Button2.innerHTML="Dessert";
       },2000);
       
   
   }TimingData2();

   function TimingData3(){
    setTimeout(()=>{
     Button3.innerHTML="Biryani";
       },3000);
       
   
   }TimingData3();

   function TimingData4(){
    setTimeout(()=>{
     Button4.innerHTML="Samosa";
       },4000);
       
   
   }TimingData4();

   function TimingData5(){
    setTimeout(()=>{
     Button5.innerHTML="Idly";
       },5000);
       
   
   }TimingData5();
   

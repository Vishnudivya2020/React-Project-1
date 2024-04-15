//stpe 1
function insertCardPrompt(cb){
    console.log("Hi insert your card");
 cb();
}

//step2
function selectAccountType(cb){
    console.log("Please select a account type");
    //creating our own delay
    setTimeout(()=>{
        console.log("account type selected");
    cb();
    },4000)
}
//step3
function processing(cb){
    console.log("processing your request");
    setTimeout(()=>{
        console.log("Taking time to complete your process");
      cb();
    },2000);

}
//step4
function greeting() {
    console.log("your process is completed");
}
function handlingCash() {
    insertCardPrompt(()=>{
        selectAccountType(()=>{
            processing(()=>{
                greeting()
            }); 
        }); 
    });
    
}

//small example for async 

//example-1
// function bca(){
//     console.log("bca");
//    }
  
// function abc(){
// console.log("abc");
// setTimeout(()=>{
// console.log("hi")
// },2000)
// bca();
// }
// abc();

//exmple-2:
//Async callback
function a(cb){
 console .log("a")
 setTimeout(()=>{
    console.log("delay.....")
    cb();
 },2000)
 
}

function b(para){
console.log(para)
}

function c(){
console.log("c")
}

a(()=>b("s"));




//setup code 

const form=document.getElementById("form");
// console.log(form)
form.addEventListener("submit",(event)=> {
    event.preventDefault();
    let taskPercentage=document.querySelector(".task-input").value;
    console.log(taskPercentage);
    //if task percentage 80 placement  or else he/she has to wait;
    // Promise->producer.
    let place_promise=new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(taskPercentage >=80){
                resolve("yes! we can move for placement");
               }else{
                reject("we cannot move this profild");
               }
        },2000);
    });
});
     

//pending=> fullied or else rejected ah polam. 
 
//Promise->consumer.
// place_promise
//     .then((res)=>{
//         console.log(res);
//         console.log("Result provider");
//     })
//     .catch((rej) => {
//         console.log(rej);
//         console.log("Result provided");
//     })
//     .finally(() => console.log("Result is given"));
 
// });
//chaining-process:
let chain_promise =new Promise((res, rej) =>{
    let value=2;
    setTimeout(()=>{
        if (value<=0){
            rej("cannot do next process");
        }else {
            res(value);
        }
    },2000);
});
 //chaining of process
 chain_promise
    .then((data) =>{
        console.log("first process",data);
        return data*2;
    })
    .then ((data2) =>{
        console.log("second process",data2);
        return data2*2;
    })
    .then ((data3) =>{
        console.log("third process",data3)
        return data3+5;
    })
    .then ((data4) =>{
        console.log("third process",data4)
        return data4-2;
    })
    
 




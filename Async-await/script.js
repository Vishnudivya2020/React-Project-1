function getPermission(name){
    return new Promise((resolve, reject)=>{
        if(name=="MENTOR"){
            setTimeout(() =>{
            resolve("Access Granted");
            },2000)
        }else{
            setTimeout(() =>{
                reject("Access Denied");
            });
        }
    });
}
function giveData(Access){
    return new Promise((resolve,reject)=>{
        if(Access=="Access Granted"){
            setTimeout(() =>{
                resolve([{name:"DIVYA"}]);
            },2000);
        }else{
            setTimeout(() =>{
                reject("Data Failed");
            },2000);
        }
    });
}
 
//Promise chaing....
// getPermission("MENTOR")
// .then((data)=>data)
// .then((data)=>{
//     console.log("Welcome your data is processing");
//     return data;
// })
// .then((data)=>giveData(data))
// .then((res)=>console.log(res))
// .catch((err)=>console.log("ERROR",err));

function makeDelay(ms){
    return new Promise((res,rej) =>{
        setTimeout(() =>{
         res(`Delay done for ${ms}ms`)

        },ms);  
    });
}

// promise chaining......
// function doOperation(){
//     console.log("start");
//     console.log("operation1");
//     console.log("operation2");
//     makeDelay(2000)
//     .then((data)=>console.log(data))
//     .then(()=>console.log("operation3"))
//     .then(()=>{
//         makeDelay(1000)
//     .then((data)=>console.log(data))
//     .then((data)=>console.log("stop"))

//     });
   
// }
// doOperation();

//async await.....
//  async function doOperation(){
//     console.log("start");
//     console.log("operation1");
//     console.log("operation2");
//      let delay=await makeDelay(2000);
//      console.log(delay);
//     console.log("operation3");
//     let Delay= await makeDelay(1000);
//     console.log(Delay);
//     console.log("stop");
    
    
   
// }
// doOperation();

function makeDelay(ms){
    return new Promise((res,rej) =>{
        if(ms <= 1000) {
            setTimeout(()=>{
              res(`Delay done for ${ms}`);
            },ms);
        }else{
            setTimeout(()=>{
                rej(`ERROR in delay executing ${ms}`);
            },ms);
        }
        

    })
}

 async function doOperation(){
    try{
    console.log("start");
    console.log("operation1");
    console.log("operation2");
     let delay=await makeDelay(1000);
     console.log(delay);
    console.log("operation3");
    let Delay= await makeDelay (2000);
    console.log(Delay);
    console.log("stop");
    }catch(error){
        console.log("ERROR:",error);
    }
    
    
   
}
// doOperation();

//In promise fetch....
// fetch("https://restcountries.com/v3.1/all")
// .then((res) =>res.json())
// .then((data) =>console.log(data));/.


let countryEle=document.getElementById("country-container");
let currentpage=1;
let itemspage=5;
 async function fetchCountries(){
    try{
         countryEle.innerHTML="";
        let startIndex=(currentpage-1)* itemspage;
        let endIndex=startIndex+itemspage
        let res=await fetch("https://restcountries.com/v3.1/all")
   let data=await res.json();
  data.slice(startIndex, endIndex).forEach((ele)=>{
     countryEle.appendChild (createDataCard(ele));
  });

    }catch(error){
         console.log(err)
        countryEle.innerHTML +=`
        <h1 style="text-align:center"> Error Occured Sorry! 🤷‍♀️</h1>`
    }
   
}

function createDataCard(ele){
    let card=document.createElement("div");
    card.innerHTML +=`
    <div class="container">
    <img id="flag" src=${ele.flags.png} alt="somename" />
    <div class="card-info">
    <h2>${ele.name.common}</h2>
    <p><span>Population:</span>${ele.population}</p>
    <p><span>Region:</span>${ele.region}</p>
    <p><span>Capital:</span>${ele.capital}</p>
       </div>
   </div>`
    console.log(card);
   return card;
}
fetchCountries();

function prevButton(){
    if(currentpage>1){
        currentpage--;
        fetchCountries();
    }

}
function NextButton(){
    
     currentpage++;
    fetchCountries();

}


        
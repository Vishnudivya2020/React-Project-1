function getData(Name){
    return new Promise((res, rej) => {
        
        if(Name=="Mentor"){
            setTimeout(()=>{
            res([1,2,3,4,5,6,7])
            },2000)
        }else{
            setTimeout(()=>{
        rej("ERROR") 
            },2000) 
        }
     })

    
}getData("Mentor")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))

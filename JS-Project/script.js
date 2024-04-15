const API="https://65e294f3a8583365b3184585.mockapi.io/Divya";

const dummyData={
    name:"new name",
    batch:"19",
    Age:27,
    id:19,
}

//Helper function
//Get API
async function  getDivyaData(){
    try{
        const res = await fetch(API,{
          method:"GET"  
        });
        const data=await res.json();
        console.log(data);

    }catch (error){
     console.log(error);
    }
}

//Post API (To add new data)

async function  addNewDivyaData(payload){
    try {
        const res=await fetch(API,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json",
            },
        });
        const data=await res .json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

//executing helper functions
//getDivyaData();
addNewDivyaData(dummyData);

//PUT API (To edit a data)

async function editDivyaData(payload,id){
    try{
        const res=await fetch(`${API}/${id}`,{
           methord:"PUT",
           body:JSON.stringify(payload),
           header:{
            "Content-Type":"application/json",
           } ,
        });
        const data=await res.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
//executing helper function
getDivyaData();
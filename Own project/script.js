
// 

const API="https://65ed5d430ddee626c9b18585.mockapi.io/Learner"

const learnercontainer =document.getElementById("Learner-data");
const learnersform=document.getElementById("learners-form");
let editId;



//CRUD-CREATE READ UPDATA DELETE
//helper function 

// //GET API //READ

async function fetchData(id){
       try{
       const res=await fetch(`${API}/${id}`,{
           method:"GET",
       });
        const data=await res.json(); 
       //display all student info in UI
       mapAllLearners(data);
    console.log(data)
    
       }catch(error){
        console.log(error);
       }
    }

    //POST API(To add new data)

    async function addNewLearnerData(payload){
       try{
        const res=await fetch(API,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-Type":"application/json",
            },
        });
        const data=await res.json();
        appendNewLearner(data);
        clearform();
    }catch(error){
        console.log(error);
    }
};
 //PUT API (To Edit a data)

async function editStudent(payload,id){
    try{
        const res=await fetch(`${API}/${id}`,{
            method:"PUT",
            body:JSON.stringify(payload),
            headers:{
                "content-Type":"application/json",
            },
        });
        const data=await res.json();
        if(data){
            location.reload();
        }
    }catch(error){
        console.log(error);
    }

}

//DELETE API(TO delete a data)
  
async function deletStudent(id,parent){
    try {
    const res=await fetch(`${API}/${id}`,{
       method:"DELETE",
       headers:{
        "Content-Type":"application/json",
       }, 
    });
    const data=await res.json();
    if(data){
     parent.remove();
    }else{
    console.log ("error")
    }
   }catch(error){
    console.log(error); 
  }
}

    // executing helper function
    fetchData("");
    // addNewLearnerData(dummydata);
    // editStuden"t(changeName,"1");
    // deletStudent("6");


    //Controllers

    //creating a new student info card
    function appendNewLearner(Learner){
        const mainDiv=document.createElement("div");
                                                                      
        mainDiv.className="card";
        mainDiv.innerHTML  +=`
        <h2>${Learner.name}</h2>
        <p>Batch <span id="batch-value" >${Learner.batch}</span></p>
        <p>Age <span id="age-value">${Learner.age}</span></p>
        <div class="action-btn-group">
        <button data-id=${Learner.id} id="edit-btn">Edit</button>
        <button data-id=${Learner.id} id="del-btn">Delete</button>
        </div>`;
        learnercontainer.append(mainDiv);
        
    }

    //form creation
    learnersform.innerHTML +=`
    <form>
            <h2>Learners Form</h2>
            <input
            type="text"
            name="name"
            requiredvalue=""
            placeholder="Enter learners name"
            class="input-text"
            id="input-name"
            />
            <input
            type="text"
            name="batch"
            requiredvalue=""
            placeholder="Enter learners batch"
            class="input-text"
            id="input-batch"
            />
            <input
            type="text"
            name="age"
            requiredvalue=""
            placeholder="Enter learners age"
            class="input-text"
            id="input-age"
            />
            <button type="submit" id="add-btn" class="btn">Add student</button>
            <button type="submit" id="update-btn" class="btn">Update student</button>
            
            </form>`;

        const input_name=document.querySelector("#input-name");
        const input_batch=document.querySelector("#input-batch");
        const input_age=document.querySelector("#input-age");
        const updateBtn=document.querySelector("#update-btn");
        const addBtn=document.querySelector("#add-btn");
        updateBtn.style.display="none"; 

    //map all lerners recived from api
    function mapAllLearners(Learner){
        Learner.map((value )=>{
            appendNewLearner(value);
        });
    }

    function clearform(){
        input_name.value=""
        input_batch.value=""
        input_age .value=""
       
    }



    function getuserInputValues(){
        
        return {
            name:input_name.value,
            batch:input_batch.value,
            age:input_age.value,
        }
          
    }
    function populateForm(parentNode){
      input_name.value=parentNode.querySelector("h2").innerText;
      input_batch.value=parentNode.querySelector("#batch-value").innerText;
      input_age.value=parentNode.querySelector("#age-value").innerText;
      addBtn.style.display="none";
      updateBtn.style.display="block";
    
    }

    learnersform.addEventListener("click",(e)=>{
        e.preventDefault();
        if(e.target.id=="add-btn"){
        //get user input data
       const payload=getuserInputValues();
       console.log(payload);
       addNewLearnerData(payload);
       clearform();
        }
        if(e.target.id=="update-btn"){
           const payload= getuserInputValues();
           editStudent(payload,editId );
        console.log(editId);

        }
    });

    learnercontainer.addEventListener("click",(event)=>{
         const id=event.target.dataset.id;
         const parentNode=event.target.parentNode.parentNode;
         if(event.target.id==="del-btn"){
            deletStudent(id,parentNode);
         }
         if(event.target.id=="edit-btn"){
           populateForm(parentNode);
           editId=id;  
         }
    });
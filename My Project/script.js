
// Get the data from the API using fetch.
let Div=document.getElementsByClassName("container")
console.log(Div);
function API(){
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
.then((res)=>res.json())
.then((data)=>{
    data.slice(1, 6).map((ele)=>{
    console.log(ele);
    
    })
})
.catch((err)=>console.log(err))

};

 
API();

//onclick function for all dummy button.
 function onclickcat1(){
     let say=" NOTHING HERE!🤷‍♀";
     alert(say);

 }

 function onclickcat2(){
    let saytext="🐱's ARE NOT HERE!";
    alert(saytext);

}
function onclickcat3(){
    let saytext="NO! MEOW MEOWS!😽";
    alert(saytext);

}
function onclickcat4(){
    let saytext="FIND ME!🐈";
    alert(saytext);

}



//onclick function for a button linked in <a> tag.
function  OnclickCatPic(){
    let DIV=document.getElementById("catId");
    console.log(DIV);
    let head=document.createElement("h3");
    console.log(head);
    head.textContent="Congrats!.👍";
    head.setAttribute("class","head");
    DIV .appendChild(head);

 }

 function  OnclickCatspic(){
    let Div=document.getElementById("catId-2");
    console.log(Div);
    
    let head=document.createElement("h3");
    console.log(head);
    head.textContent="Super!.👌";
    head.setAttribute("class","head");
    head.style="color:yellow";
    Div.appendChild(head);

 }

 function  OnclickCatimg(){
    let div=document.getElementById("catId-3");
    console.log(div);
    
    let head=document.createElement("h3");
    console.log(head);
    head.textContent="Good!.👏";
    head.setAttribute("class","head");
    head.style="color:green";
    div.appendChild(head);

 }
 function  OnclickCatimges(){
    let Division=document.getElementById("catId-4");
    console.log(Division);
    
    let head=document.createElement("h3");
    console.log(head);
    head.textContent="Excellent!.🤝";
    head.setAttribute("class","head");
    head.style="color:blue";
    Division.appendChild(head);

 }



 







   




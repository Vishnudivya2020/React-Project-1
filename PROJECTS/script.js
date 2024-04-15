//get firstname using queryselector.
const form=document.querySelector(".D-form");
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let Fname=document.getElementById("Fname").value;
   

    let Lname=document.getElementById("Lname").value;
  
    let address=document.getElementById("address").value;
    let  Pincode=document.getElementById("Pincode").value;
    let  table=document.getElementById("D-table");
    let row=table.insertRow();
    let cell1=col.insertCell(0);
    let cell2=col.insertCell(1);
    let cell3=col.insertCell(2);
    let cell4=col.insertCell(3);
    cell1.innerText=Fname;
    cell2.innerText=Lname;
    cell3.innerText=address;
    cell4.innerText=Pincode;
    form.reset();
   
});


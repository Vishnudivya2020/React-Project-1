const form=document.querySelector(".Dform");
console.log(form);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let Name1=document.getElementById("Name1").value;
    let Name2=document.getElementById("Name2").value;
    let address=document.getElementById("address").value;
    let Pincode=document.getElementById("Pincode").value;
    // let gender=document.getElementById("gendre").value;
//     let Div=document.getElementById("gender");
// console.log(Div);
// let table=document.getElementById("table")
// console.log(table);


// document.getElementById('gender').addEventListener('submit', function(event) {
//    if (event.target.type === 'radio' && event.target.checked) {
//        var gender_value = event.target.value;
//        console.log( gender_value);
//        let gender=document.getElementById("gendre").value;  
//    }
   
// //   table.innerHTML=gender_value;

// });
    let table=document.getElementById("table")
    let row=table.insertRow();
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    
    
    
    cell1.innerText=Name1;
    cell2.innerText=Name2;
    cell3.innerText=address;
    cell4.innerText=Pincode;
    
    
    form.reset();
});

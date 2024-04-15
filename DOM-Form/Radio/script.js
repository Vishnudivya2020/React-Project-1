let Div=document.querySelector("div");
console.log(Div);
let table=document.getElementById("table")
console.log(table);

document.getElementById('gender').addEventListener('click', function(event) {
   if (event.target.type === 'radio' && event.target.checked) {
       var gender_value = event.target.value;
       console.log( gender_value);
      
   }
//    if (document.getElementById('r1').checked) {
//     gender_value = document.getElementById('r1').value;
//   }
  table.innerHTML=gender_value;
  // table.append(gender_value);

});


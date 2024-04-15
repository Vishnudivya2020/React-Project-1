let food=document.querySelector("#food");
console.log(food);
let table=document.querySelector("#F-table");
console.log(table);


document.getElementById('food').addEventListener('click', function(event) {
    if (event.target.type === 'checkbox' && event.target.checked) {
        var food_value = event.target.value;
        console.log( food_value);
       
}

table.append((food_value)+",");

    
});

let screen=document.getElementById("screen");
console.log(screen);

function display(num){
    screen.value +=num;
}
function calculate(){
    try{
        screen.value=eval(screen.value);
    }
    catch(err)
    {
        alert("Only Numbers Are Allowed");
    }
}
function Clear(){
    screen.value="";
}
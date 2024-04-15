let heading=document.getElementById('head');
     let user='Divya';
    heading.textContent=`Hi ${user}!`;
    console.log(heading.textContent);

    let create=document.createElement('h1');
    create.textContent='DivyaVishnu!'
    document.body.appendChild(create);
    console.log(create)
   
    let baby=document.createElement('h3');
    baby.textContent='Yogi';
    let para=document.createElement('p');
    para.textContent='Yogi is  baby of vishnu divya.';
    let division=document.getElementById('class');
    division.append(baby , para);
    

    //old class Task:
//1)Create a div element with a class of "container" and append it to the body.
 
let Div=document.createElement('div');
Div.setAttribute('class','container')
document.body.appendChild(Div);
// console.log(Div);

//Create an h1 element with a text of "DOM Tasks" and append it to the container.
let head=document.createElement('h1');
head.textContent='DOM Tasks';
Div.appendChild(head);

//Create a p element with a text of "All DOM tasks will be added here!" and append it to the container.
let paragraph=document.createElement('p');
paragraph.textContent="All DOM tasks will be added here!";
paragraph.style.color='red';
paragraph.setAttribute('class','font')
Div.appendChild(paragraph);

//Create a button element with a text of "Click Me!" and append it to the container.
let btn=document.createElement('button');
btn.textContent="Click Me!";
btn.classList.add('color');
Div.appendChild(btn);

//Create a ul element with a class of "list" and append it to the container.
let unorder=document.createElement('ul');
unorder.setAttribute('class','list');
Div.appendChild(unorder);

//Create 5 li elements with a text of "List Item" and append them to the ul.
for(let i=1;i<=5;i++){
    let li=document.createElement('li');
    li.textContent="List Item";
    unorder.appendChild(li);
}

//Style the above paragraph element with a font size of 20px and a color of red.

// Style the above button element with a background color of green and a color of white.
//-----------------*/*\*------------------//

//new class task:
//creat a anchortag
//href and traget=_blank
//console.log(anchor element)

let anchorElement=document.createElement('a');
anchorElement.setAttribute('href','www.google.com')
anchorElement.textContent="Google";
anchorElement.setAttribute('target','_blank');
console.log(anchorElement);
Div.appendChild(anchorElement);


const colors=["yellow","darkblue","orange","green"];

let allquery=document.querySelectorAll(".query-class");
for(let i=0;i<allquery.length;i++){
    allquery[i].style.color=colors[i];
    console.log(allquery[i]);
}


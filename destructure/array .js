// let names=[null,"bharathi","vishnu","yogi"];
// let [names1="Default names",...[names2]]=names;
// console.log(names1)
// console.log(names2);


var Name='Divya';
var Gender='Female';
var Age=27;

const Details={
    Name,
    Gender,
    Age 
}

console.log(Details)
    
   

// let Name;
// ({Name}=Details);
// console.log(Details.Name.Lname)

// function printNameAndAge({FName,Age}){
//     console.log(FName+' -'+Age)
// }
// printNameAndAge(Details)

// let a=10;
// let b=20;

// [b,a]=[a,b]
// console.log(a,b)


// function calculate(a,b){
//     const add=a+b;
//     const sub=a-b;
//     const mul=a*b;
//     return {add ,subraction:sub ,mul};
// }
// let {add ,subraction:sub ,mul}=calculate(5,6)
// console.log(add);
// console.log(sub);
// console.log(mul);

// const emplayees={
//     company1:['Vishnu','Kumar'],
//     company2:['Divya','Bharathi'],
//     company3:['yogith','siddarthan'],
// }
// const {company3:[,name]} = emplayees;
// console.log(name);
    
//Template literals:
let firstname="divya"
let lastname="vishnu"
let city="Palani"

console.log(firstname +" " +lastname +" lives in " +city )
let msg=`${firstname} ${lastname} lives in ${city}`

console.log(msg);

let msge=`Happy
 Birthday`
console.log(msge);

let masg =  `cat's name is "toto"`
console.log(masg);

let a=5;
let b='$95';

let ans=`"you have ${a} items in your cart.
Your bill amount is ${b}"`

console.log(ans);


// let a=5;
// let b=95;

const quo=Math.floor(95/5);
console.log(quo); 

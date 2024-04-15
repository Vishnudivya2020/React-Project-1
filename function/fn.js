
//fn declaretion
function isPositive(num){ //parameters
    return num>0
}
console.log(isPositive(5));//arguments.

//no rguments & return fn.
function sayHello(){
    console.log("Hello  world");
}
sayHello();
console.log(sayHello);

console.log(product(4 ,5));//this type is called hoisding
function product(a ,b){
    return a*b 
}
// console.log(product(4 ,3));
console.log(product)
console.log(typeof product);

//default parameters.
function greeting(name){
    console.log('Hi',name);
}
greeting('divya')


//recursion-function calling itself.
//factorial-product of first n numbers.
//5!=5*4*3*2*1 =5*4!
function factorial(n){
    if(n==1)
    return 1
return n*factorial(n-1)

}
console.log(factorial(6));

//fn expression.ass to variable as a object.
let arr=[2 ,3, 5, 6, 8]
let arraysum=function(arr){
    let sum=0
    for(let val of arr){
        sum +=val
    }
    return sum
}
console.log(arraysum(arr));

//arrow fn.
let arrsum=arr=>{let sum=0
    for(let val of arr){
        sum +=val
    }
    return sum
}
console.log(arrsum(arr));

let areaofCircle= r =>{return 3.1429*r*r}
console.log(areaofCircle(5));

// const Number=[1, 4, 6, 8, 0]
// function changenum(Number){
//     console.log(changenum(88))  

// }
// changenum(Number(1)

//class .
class User{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    login(){
        console.log('Hi',this.name)
        console.log('you are logged in')
    }
    logout(){
        console.log('you  are logged out')
    }
}
let userOne=new User('Divya',27)

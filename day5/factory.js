// function studentDetails(Name, Class, Mark){
//     return{
//         Name,
//         Class,
//         Mark,
//         startstudentDetails:function(){
//             console.log(`The student ${Name} studied class ${Class}.and get the mark is ${Mark} `)
//         }

//     };
// }

// const Divya =studentDetails("DIVYA","5","90");
// console.log(Divya);
// Divya.startstudentDetails();

// const vishnu =studentDetails("VISHNU","5","95");
// console.log(vishnu);
// vishnu.startstudentDetails();



// //this methord:
// let name="global";
// const outerobj={
//     name:"aravind",
//     batch:"weekend",
//     innerobj:{
//         name:"sanjay",
//         getdetails:function(){
//             console.log(this.name);
//         },
//         getdata:()=>{
//             console.log(this.name)
//         },
//         getgloblinarrow(){
//             const arrowmethod=()=>{
//                 console.log(this.name);
//         } ;
//         arrowmethod();
           
//     }
// }
// }

// outerobj.innerobj.getdetails();
// outerobj.innerobj.getdata();
// outerobj.innerobj.getgloblinarrow();

//constructor function
function Meeting(name,time,food){
   this.name=name;
    this.time=time;
   this.food=food;
    this.startmeeting = function () {
        console.log(`a ${this.name} attend the party at ${time} and eat lunch ${food}`)
    } 
        
    };
    
const meet=new Meeting("divya","12","biriyani");
console .log(meet);
meet.startmeeting()
//prototype

    








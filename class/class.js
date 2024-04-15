//write a person class to hold all details.
class Persondetails{
    constructor(name, age, education, work){
        this.name=name;
        this.age=age;
        
        this.education=education;
        this.work=work;
    }
        
        
 collectdetails(){
    console.log(`hi i am ${this.name},i am ${this.age}year old,and i was completed ${this.education},now i working ${this.work}`);
 }

}
const divya=new Persondetails("divya", 27,"M.SC","Teaching")
console.log(divya);
divya.collectdetails()

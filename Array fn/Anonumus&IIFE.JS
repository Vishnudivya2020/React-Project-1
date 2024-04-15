
//a.print odd numbers in a array.

//Anonoumus method:
let arr=[1,2,3,4,5,6,7,8,9]

let odd=function(arr){
   return arr%2!=0;
}
let oddnumbers=arr.filter(odd);
console.log(oddnumbers);
 //OUTPUT:[1,3,5,7,9]

 //IIFE:-
 (function(){
  let oddnum =arr.filter(arr=>arr%2==1);
  console.log(oddnum);
})();
//OUTPUT:[1,3,5,7,9]

//b. Convert all the strings to title caps in a string array.
//Anonoumus method:

let str=function(){
    let array="divya vishnu yogi"
    let caps=array.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
    console.log(caps)
}
str();

//OUTPUT:Divya Vishnu Yogi
//IIFE:-

(function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '));
})("divya vishnu yogi")

//OUTPUT:Divya Vishnu Yogi

//c.sum of all numbers in array.
//Anonoumus method:
let func=function(){
    let sum=arr.reduce(function(a,b){
        return a+b;
    })
    console.log(sum);
}
func();
//OUTPUT:45

//IIFE:
(function () {
  let sum = [1, 2, 3, 4].reduce(add, 5);
  function add(accumulator, a) {
    return accumulator + a;
  }
  console.log(sum);
})()
//OUTPUT: 15

//d.Return all the prime numbers in an array
//Anonoumus method:
let prime = function (arr) {
    return arr.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(prime([7, 16, 9, 3 ,11,14]));
  //OUTPUT:  [7,3,11]

     //IIFE:
     (function (){
      var primeNum = [7, 16, 9, 3,11,14]
      
      primeNum = primeNum.filter(function(number) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      
      console.log(primeNum);
      })()
      //OUTPUT: [7,3,11]

  //e.Return all the palindromes in an array

  let isPalindrome = function () {
    var myArray = ['level', 'madam', 'honda', 'malayalam','read'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome();
  //output:level madam  malayalam 

   
      //IIFE :

( function () {
  var myArray = ['level', 'madam', 'honda', 'malayalam', 'read'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})()
//output:level madam  malayalam

  //f.Return median of two sorted arrays of same size.
  let median = function(a, b) {
  
    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2));
  //output:20.5

  //IIFE
  
  ( function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()
    //output:20.5

  //g. Remove duplicates from an array

  let findDuplicates = function () {
  
    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }
  findDuplicates();
  //OUTPUT:  [1, 5]

   //IIFE :


(function(){
  
  let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(duplicates);
})()
//OUTPUT:  [1, 5]


  //h.Rotate an array by K times

  let rotateArray =function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  }
  rotateArray([1,2,3,4,5],2);
  
  
  //OUTPUT:  [4, 5, 1, 2, 3]

   //IIFE :
  
   (function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A)
  })([1,2,3,4,5],2)
  
  //OUTPUT:  [4, 5, 1, 2, 3]

       


 




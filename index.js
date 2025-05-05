console.log("Test");
// variable declaration
let a=1; 
const pi=3.14;
let b="Senbe";
let c=true
let d='a'
a=2;

console.log(a);

if(a===2){
    console.log("Correct")
}else{
    console.log("Incorrect")
}

const array1=[1,2,3,4,5];
for (let i=0; i<array1.length; i++)
    console.log(number_${i+1})

// Function

function addition(a,b){
    return a+b;
};
console.log(addition(4,5));


//Arrow Function
setTimeout(()=>{
    console.log("test test")
}, 1000);

const addition1=(a,b)=>{
    return a+b;
};
console.log(addition1(4,5));
new Promise((resolve, reject) => {
    
})
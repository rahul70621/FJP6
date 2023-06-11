// function in js with parameter and without return type
function sayhello(){
    console.log("Hello to function")
}

sayhello();
// -----------

// function with parameter
function add(num1,num2){
    let addition = num1 + num2;
    console.log("Addition of given number is" + addition);
}
add(2,3);

// function with return type

function multiply(num1,num2){
    return num1*num2;
}
let ans =multiply(5,3);
console.log(ans);


// function stored in variable

let a = function sun(num1,num2){
    return num1-num2;
}
console.log(a(5,4));

// function practice

function bye(){
    console.log("bye bye");
}
bye();

function add(num1,num2){
    let addition = num1 + num2;
    console.log("sum of two number is " + addition);
    }
add(4,5);

function multiply(num1,num2){
    return num1*num2;
}
let solution = multiply(10,10);
console.log(solution);

let x = function sub(num1,num2){
    return num1-num2;
}
console.log(x(5,4));

// IIFE- Immeditely invoked Function Expression
(function(){
    console.log("welcome to IIFE");
})();

// IIFE with Parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,2);
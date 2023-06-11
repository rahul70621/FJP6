// empty array
let arr =[];
console.log(arr);

// array with elements
let elearr = [1,2,4,5,"string",false,"c",4.5];
console.log(elearr);
console.log("Element at fourth index "  +  elearr[4])

elearr[4] = "Nothing";
console.log(elearr[4]);
console.log(elearr);

// array methods
// 1.push- it adds items in array in last
console.log("Array before push " + elearr);
elearr.push("new item");
console.log("Array after push " + elearr);


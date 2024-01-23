


var array = prompt("Enter a sentence");
var arr =array.split(' ');
    counts = {};

arr = arr.join("").split(""); 
arr.forEach((v) => (counts[v] = (counts[v])? ++counts[v] : 1));

console.log(counts); 
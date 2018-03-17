var n = 10;
var m = 20;
var arr = [];
var arr2 = [];
for(var i = 0; i < n; i++){
    arr[i] = Math.floor(Math.random() * (10 - 1) + 1);
}

for(var i = 0; i < n; i++){
    arr2[i] = Math.floor(Math.random() * (10 - 1) + 1);
}

console.log(arr);
console.log(arr2);

//in ra phần tử chỉ xuất hiện trong a mà ko có trong b
console.log("Những phần tử chỉ xuất hiện trong dãy a mà không xuất hiện trong b: ");
for(var i = 0; i < arr.length; i++){
    if(arr2.includes(arr[i]) == false){
        console.log(arr[i]);
    }
}
console.log("Những phần tử xuất hiện trong dãy a và b: ");
for(var i = 0; i < arr.length; i++){
    if(arr2.includes(arr[i]) == true){
        console.log(arr[i]);
    }
}
//chèn đầu

var x = 10;
function pushFront(arr, a){
    arr.length++;
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = a;
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
pushFront(arr, x);
console.log(arr);
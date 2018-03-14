//Xóa các phần tử nhỏ hơn 10

function xoaPhanTu(arr, ind){
    for(var i = ind; i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
}
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

console.log(arr);
for(var i = 0; i < arr.length; i++){
    if(arr[i] < 10){
        xoaPhanTu(arr, i);
        i--;
    }
}
console.log("Mảng sau khi xóa các phần tử nhỏ hơn 10 là")
console.log(arr);


//Xóa gần X
//Xóa các phần tử gần 10

function xoaPhanTu(arr, ind){
    for(var i = ind; i < arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr.length--;
}

function xoaGanX(arr, x){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == (x - 1) || arr[i] == (x + 1)){
            xoaPhanTu(arr, i);
            i--;
        }
    }
}

var X = 10;
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

console.log(arr);
xoaGanX(arr, X);
console.log("Mảng sau khi xóa các phần tử gần 10 là")
console.log(arr);


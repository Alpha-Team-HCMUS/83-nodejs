//viết hàm in ra giá trị từ 1 đến x có trong mảng
function inDenX(arr, x){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= 1 && arr[i] <= x){
            console.log(arr[i]);
        }
    }
}
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

var x = 20;
inDenX(arr, x);
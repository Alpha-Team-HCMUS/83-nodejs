//Viết hàm chèn phần tử có giá trị X vào phía sau tất cả các phần tử có giá trị chẵn trong mảng.
function pushEnd(arr, x){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr.length++;
            for(var t = arr.length - 1; t > i + 1; t--){
                arr[t] = arr[t-1];
            }
            arr[i+1] = x;
            i++;
        }
    }
}

var arr = [];
var x = -100;
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
pushEnd(arr, x);
console.log(arr);
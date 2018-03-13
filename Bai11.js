//Viết hàm tìm vị trí phần tử có giá trị x xuất hiện cuối cùng trong mảng.
function timViTriXuatHienCuoiCung(arr, x){
    for(var i = arr.length - 1; i >= 0; i--){
        if(arr[i] === x){
            return i;
        }
    }
    return -1;
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (11 - 1) + 1);
}
console.log(arr);
console.log("Vị trí của 10 xuất hiện cuối cùng trong mảng là " + `${timViTriXuatHienCuoiCung(arr,10)}`);
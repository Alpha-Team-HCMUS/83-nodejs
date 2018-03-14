//Viết hàm tìm vị trí phần tử âm đầu tiên trong mảng. Nếu không có phần tử âm trả về  –1. 
function timAmDauTien(arr){
    for(var i = 0; i < arr.length ; i++){
        if(arr[i] < 0){
            return i;
        }
    }
    return -1;
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 + 100) - 100);
}
console.log("Mảng là: ");
console.log(arr);
console.log("Vị trí phần tử âm đầu tiên trong mảng là: ");
console.log(timAmDauTien(arr));
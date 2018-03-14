//Viết hàm tìm vị trí phần tử dương đầu tiên trong mảng. Nếu không có phần tử âm trả về  –1. 
function timDuongDauTien(arr){
    for(var i = 0; i < arr.lenght; i++){
        if(arr[i] > 0){
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
console.log("Vị trí phần tử duonng dau tien trong mảng là: ");
console.log(timDuongDauTien(arr));
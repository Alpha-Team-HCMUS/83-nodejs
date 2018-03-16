// 33.	Viết hàm tính tổng các phần tử nguyên tố trong mảng
var array = [2, 3, 4, 235, 124, 7, 325, 3, 11];
function ktNguyenTo(n){
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return 0;
        }
    }
    return 1;
}

function tongNguyenTo(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (ktNguyenTo(array[i]) == 1) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng các số nguyên tố trong mảng: " + `${tongNguyenTo(array)}`);
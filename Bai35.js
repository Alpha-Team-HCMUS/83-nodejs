// 35.	Viết hàm tính tổng các phần tử nằm ở vị trí nguyên tố trong mảng. 

var array = [2, 3, 14, 124, 24, 4, 12, 4, 5, 1];

function ktNguyenTo(n){
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return 0;
        }
    }
    return 1;
}

function tongViTriNguyenTo(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (ktNguyenTo(i) == 1) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng ở vị trí nguyên tố: " + `${tongViTriNguyenTo(array)}`);
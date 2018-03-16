// 36.	Viết hàm tính tổng các phần tử chia hết cho 5 có trong mảng. 
var array = [1, 5, 3, 124, 124, 54, 21, 22, 45, 50];
function tongChiaHetCho5(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 5 == 0) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng chia hết cho 5 trong mảng: " + `${tongChiaHetCho5(array)}`);
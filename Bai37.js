//37.	Viết hàm tính tổng các phần tử cực đại trong mảng các số nguyên 
var array = [1, 5, 2, 6, 3, 5, 1, 8, 6];

function tongCucDai(array) {
    var tong = 0;
    for (var i = 0; i <= array.length - 3; i++) {
        if (array[i + 1] > array[i] && array[i + 1] > array[i + 2]) {
            tong += array[i + 1];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng phần tử cực đại: " + `${tongCucDai(array)}`);
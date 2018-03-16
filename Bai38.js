// 38.	Viết hàm tính tổng các phần tử cực tiểu trong mảng các số nguyên 
var array = [6, 4, 2, 9, 5, 3, 7, 1, 5, 8];

function tongCucTieu(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i] && array[i + 1] < array[i + 2]) {
            tong += array[i + 1];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng phần tử cực tiểu: " + `${tongCucTieu(array)}`);
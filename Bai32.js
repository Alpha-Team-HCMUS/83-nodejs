//32.	Viết hàm tính tổng các phần tử lẻ trong mảng các số nguyên
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 12];
function tongLe (array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng phần tử lẻ trong mảng là: " + `${tongLe(array)}`);
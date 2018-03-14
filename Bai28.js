// 28.	Viết hàm đếm số lần xuất hiện của phần tử x trong mảng
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];

function demPhanTuXXuatHien(array, n) {
    var dem = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            dem ++;
        }
    }
    return dem;
}

console.log(array);
console.log("Phần tử x = 5 xuất hiện trong mảng: " + `${demPhanTuXXuatHien(array, 5)}`);
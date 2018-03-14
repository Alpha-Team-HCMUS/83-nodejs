// 30.	Viết hàm đếm các phần tử là số hoàn thiện trong mảng.

var array = [2, 4, 234, 16, 124, 244, 44, 6, 28];
function ktHoanThien (n) {
    var s = 0;
    for (var i = 0; i < n; i++) {
        if (n % i == 0) {
            s += i;
        }
    }
    if (s == n) {
        return 1;
    }
    return 0;
}

function demSoHoanThien(array) {
    var dem = 0;
    for (var i = 0; i < array.length; i++) {
        if (ktHoanThien(array[i]) == 1) {
            dem ++;
        }
    }
    return dem;
}

console.log(array);
console.log("Số lượng số hoàn thiện trong mảng là: " + `${demSoHoanThien(array)}`)
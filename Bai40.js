// 40.	Viết hàm tính tổng các phần tử là số hoàn thiện trong mảng các số nguyên. 
var array = [6, 16, 12, 43, 12, 236436,  12, 124, 13];

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

function tongHoanThien(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (ktHoanThien(array[i]) == 1) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng các số hoàn thiện: " + `${tongHoanThien(array)}`);
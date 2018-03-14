// 39.	Viết hàm tính tổng các phần tử là bội của 3 và 5 trong mảng các số nguyên
var array = [3, 4, 24, 12 ,15, 30, 124, 12];
function tongBoiCua35(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0 && array[i] > 0) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng phần tử là bội của 3 và 5: " + `${tongBoiCua35(array)}`);
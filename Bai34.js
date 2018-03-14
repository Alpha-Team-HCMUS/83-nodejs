// 34.	Viết hàm tính tổng các phần tử nằm ở vị trí chẵn trong mảng các số nguyên.
var array = [1, 2, 234 ,23, 124, 66, 12, 3];
function tongViTriChan(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Tổng ở vị trí chẵn: " + `${tongViTriChan(array)}`);
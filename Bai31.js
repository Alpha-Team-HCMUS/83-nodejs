// 31.	Viết hàm đếm các phần tử là bộI của 3 và 5 trong mảng các số nguyên. 
//      Viết hàm tính tổng các phần tử chẵn trong mảng

var array = [2, 324, 12, 11, 43, 124, 414, 15, 30];
function demBoi35(array) {
    var dem = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0 && array[i] > 0) {
            dem++;
        }
    }
    return dem;
}

function tongPhanTuChan(array) {
    var tong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            tong += array[i];
        }
    }
    return tong;
}

console.log(array);
console.log("Đếm phần tử bội của 3 và 5: " + `${demBoi35(array)}`);
console.log("Tổng chẵn: " + `${tongPhanTuChan(array)}`);

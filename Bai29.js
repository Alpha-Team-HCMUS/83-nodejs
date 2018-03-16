// 29.	Viết hàm đếm các phần tử nhỏ hơn x trong mảng.
var array = [1, 2, 3, 4, 5, 6, 24, 124, 3644, 124, 243];
function demPhanTuNhoHonX(array, n) {
    var dem = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < n) {
            dem ++;
        }
    }
    return dem;
}

console.log(array);
console.log("Phần tử nhỏ hơn 30 trong mảng là: " + `${demPhanTuNhoHonX(array, 30)}`);
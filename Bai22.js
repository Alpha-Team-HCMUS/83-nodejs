// 22.	Viết hàm tìm số lẻ lớn nhất có trong mảng, nếu không tồn tại số lẻ hàm trả về -1. 

var array = [1, 123 ,10, 23, 5, 15, 65, 115, 12];
 
function timLeLonNhat (array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0 && array[i] % 2 != 0 && array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(array);
console.log("Số lẻ lớn nhất trong mảng: " + `${timLeLonNhat(array)}`);
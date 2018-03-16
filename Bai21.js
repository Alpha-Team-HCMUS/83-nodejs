// 21.	Viết hàm tìm số chẵn cuối cùng có trong mảng, nếu không tồn tại số chẵn hàm trả về -1 .

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function timChanCuoi (array) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 == 0) {
            return array[i];
        }
    }
    return -1;
}

console.log(array);
console.log("Phần tử chẵn cuối cũng trong mảng: " + `${timChanCuoi(array)}`);
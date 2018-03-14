//Tìm dương bé nhất 
//Viết hàm tìm vị trí phần tử âm lớn nhất trong mảng
function timDuongBeNhat(arr){
    var m = Infinity;
    var ind = -1;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < m && arr[i] > 0){
            m = arr[i];
            ind = i;
        }
    }
    return ind;
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 + 100) - 100);
}
console.log("Mảng là: ");
console.log(arr);
console.log("Vị trí phần tử dương bé nhất trong mảng là: ");
console.log(timDuongBeNhat(arr));
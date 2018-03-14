//Viết hàm tìm vị trí của phần tử lớn nhất trong mảng các số nguyên. 
function timViTriLonNhat(arr){
    var temp = arr[0];
    var index = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > temp){
            temp = arr[i];
            index = i;
        }
    }
    return index;
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (11 - 1) + 1);
}
console.log(arr);
console.log("Vị trí phần tử lớn trong mảng là " + `${timViTriLonNhat(arr)}`);
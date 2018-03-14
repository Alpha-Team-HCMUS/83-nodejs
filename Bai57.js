// Tính tổng từng dãy con giảm
function tongDay(arr, left, right){
    var sum = 0;
    for(var i = left; i <= right; i++){
        sum += arr[i];
    }
    return sum;
}

function tongDayConGiam(arr){
    for(var i = 0; i < arr.length - 1; i++){
        //với mỗi số chạy từ nó cho đến cuối tính tổng
        var left = i;
        var right = i;
        for(var t = i; t < arr.length-1; t++){
            if(arr[t] > arr[t + 1]){
                right++;
            }
            else{
                break;
            }
        }
        console.log(tongDay(arr, left, right));
    }
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
tongDayConGiam(arr);

function tongDay(arr, left, right){
    var sum = 0;
    for(var i = left; i <= right; i++){
        sum += arr[i];
    }
    return sum;
}

function trungBinhDayConTang(arr){
    var numSub = 0;
    var tongCacDay = 0;
    for(var i = 0; i < arr.length - 1; i++){
        //với mỗi số chạy từ nó cho đến cuối tính tổng
        var left = i;
        var right = i;
        for(var t = i; t < arr.length-1; t++){
            if(arr[t] < arr[t + 1]){
                right++;
            }
            else{
                numSub++;
                break;
            }
        }
        tongCacDay+=tongDay(arr, left, right);
    }
    return tongCacDay * 1.0 / numSub;
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
console.log(`Trung bình các dãy con tăng là: ${trungBinhDayConTang(arr)} `);
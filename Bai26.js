function demPhanTuAm(arr){
    var dem = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            dem++;
        }
    }
    return dem;
}

function demPhanTuDuong(arr){
    var dem = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            dem++;
        }
    }
    return dem;
}

var n = 10;
var arr = [];
for(var i = 0; i < n; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

console.log(`Số lượng phần tử âm là ${demPhanTuAm(arr)}`);
console.log(`Số lượng phần tử dương là ${demPhanTuDuong(arr)}`);
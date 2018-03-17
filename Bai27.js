function demPhanTuChan(arr){
    var dem = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            dem++;
        }
    }
    return dem;
}

function demPhanTuLe(arr){
    var dem = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
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

console.log(arr);
console.log(`Số lượng phần tử chẵn là ${demPhanTuChan(arr)}`);
console.log(`Số lượng phần tử lẻ là ${demPhanTuLe(arr)}`);
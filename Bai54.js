//chèn x vào trước số nguyên tố đầu tiên trong mảng

function KTNT(a){
    for(var t = 2; t <= Math.sqrt(a); t++){
        if(a % t == 0){
            return false;
        }
    }
    return true;
}

function pushFrontFirstPrime(arr, x){
    var ind = -1;
    for(var i = 0; i < arr.length; i++){
        if(KTNT(arr[i]) == true){
            ind = i;
            break;
        }
    }
    if(ind != -1){
        arr.length++;
        for(var i = arr.length - 1; i > ind; i--){
            arr[i] = arr[i-1];
        }
        arr[ind] = x;
    }
}

var arr = [];
var x = 100;
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
pushFrontFirstPrime(arr, x);
console.log(arr);
function findMax(arr){
    var m = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > m){
            m = arr[i];
        }
    }
    return m;
}

function pushEndMax(arr, x){
    var m = findMax(arr);
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == m){
            arr.length++;
            for(var t = arr.length - 1; t > i + 1; t--){
                arr[t] = arr[t-1];
            }
            arr[i+1] = x;
            i++;
        }
    }
}

var arr = [];
var x = -100;
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
pushEndMax(arr, x);
console.log(arr);
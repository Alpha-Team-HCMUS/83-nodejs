function timVTMax(arr){
    var max = arr[0];
    var ind = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            ind = i;
        }
    }
    return ind;
}

function timVTMin(arr){
    var min = arr[0];
    var ind = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            ind = i;
        }
    }
    return ind;
}

function swapMinMax(arr){
    var i = timVTMax(arr);
    var j = timVTMin(arr);
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
swapMinMax(arr);
console.log(arr);
function KTNT(a){
    for(var t = 2; t <= Math.sqrt(a); t++){
        if(a % t == 0){
            return false;
        }
    }
    return true;
}

function timViTriNguyenTo(arr){
    for(var i = 0; i < arr.length; i++){
        if(KTNT(arr[i]) == true){
            console.log(`${i}`)
        }
    }
}
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
timViTriNguyenTo(arr);

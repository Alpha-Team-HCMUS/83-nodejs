function KTNT(a){
    for(var t = 2; t <= Math.sqrt(a); t++){
        if(a % t == 0){
            return false;
        }
    }
    return true;
}
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
console.log("Các phần tử là số nguyên tố < 100 có trong mảng là: ");
var flag = 0;
for(var i = 0; i < arr.length; i++){
    if(KTNT(arr[i]) == true && arr[i] < 100){
        console.log(`arr[${i}] = ${arr[i]}`);
        flag = 1;
    }
}

if(flag == 0){
    console.log("Không có số nguyên tố < 100 trong mảng");
}
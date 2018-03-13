//Viết chương trình nhập vào mảng một chiều các số nguyên và xuất ra màn hình các phần tử là số nguyên tố
function KTNT(a){
    for(var t = 2; t <= Math.sqrt(arr[i]); t++){
        if(arr[i] % t == 0){
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
console.log("Các phần tử là số nguyên tố có trong mảng là: ");
for(var i = 0; i < arr.length; i++){
    if(KTNT(arr[i]) == true){
        console.log(`arr[${i}] = ${arr[i]}`);
    }
}
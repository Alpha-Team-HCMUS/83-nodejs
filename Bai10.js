function KTCP(a){
    var b = Math.sqrt(a);
    if(b == Math.trunc(b)){
        return true;
    }
    return false;
}
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
console.log("Các phần tử là số chính phương ở vị trí lẻ có trong mảng là: ");
var flag = 0;
for(var i = 0; i < arr.length; i+=2){
    if(KTCP(arr[i]) == true){
        console.log(`arr[${i}] = ${arr[i]}`);
        flag = 1;
    }
}

if(flag == 0){
    console.log("Không có số chính phương nằm ở vị trí lẻ trong mảng");
}
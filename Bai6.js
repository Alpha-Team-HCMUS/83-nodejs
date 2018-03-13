var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

console.log("Các phần tử lẻ có trong mảng là: ");
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        console.log(`arr[${i}] = ${arr[i]}`);
    }
}
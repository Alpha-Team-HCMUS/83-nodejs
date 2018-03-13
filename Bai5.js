var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.random() * (100 + 100) - 100;
}

console.log("Các phần tử âm trong mảng là");
for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        console.log(`arr[${i}] = ${arr[i]}`);
    }
}
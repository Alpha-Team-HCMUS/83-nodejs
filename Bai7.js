//Viết chương trình nhập vào mảng một chiều các số nguyên và xuất ra các phần tử chẵn nhỏ hơn 20
var arr = [];
for(var i = 0; i < 10; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(arr);
console.log("Các phần tử chẵn < 20 có trong mảng là: ");
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0 && arr[i] < 20){
        console.log(`arr[${i}] = ${arr[i]}`);
    }
}
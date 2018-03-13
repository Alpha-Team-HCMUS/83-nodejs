//phát sinh ngẫu nhiên mảng 1 chiều các số nguyên âm

var n = Math.floor(Math.random() * (100 - 5) + 5);
console.log(`Số phần tử được khởi tạo là ${n}`);
var arr = [];
for(var i = 0; i < n; i++){
    var num = Math.floor(Math.random() * (0 + 1000) - 1000);
    arr.push(num);
}

for(var i = 0; i < n; i++){
    console.log(`arr[${i}] = ${arr[i]}`);
}

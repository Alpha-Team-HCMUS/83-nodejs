//Viết chương trình phát sinh ngẫu nhiên mảng một chiều các số nguyên sao cho mảng có thứ tự tăng dần (Không sắp xếp)

var n = Math.floor(Math.random() * (100 - 5) + 5);
console.log(`Số phần tử được khởi tạo là ${n}`);
var arr = [];
for(var i = 0; i < n;i++){
    if(i == 0){
        var num = Math.floor(Math.random() * (10000 + 1000) - 1000);
        //Math.floor(Math.random() * (max - min) + min);
        arr.push(num);
    }
    else if(i != 0){
        var num = Math.floor(Math.random() * (10000 - arr[i-1]) + arr[i-1]);
        //Math.floor(Math.random() * (max - min) + min);
        arr.push(num);
    }
}

for(var i = 0; i < n; i++){
    console.log(`arr[${i}] = ${arr[i]}`);
}

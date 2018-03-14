//Viết chương trình nhập vào mảng A gồm n phần tử,
// trong quá trình nhập kiểm tra các phần tử nhập vào không được trùng,
// nếu trùng thông báo và yêu cầu nhập lại. 

var arr = [];
var n = 10;
for(var i = 0; i < n;){
    var num = Math.floor(Math.random() * (11 - 0) + 0);
    //*(max - min) + min;
    if(arr.indexOf(num) >= 0){
        console.log(`${num} is available`);
    }
    else{
        arr.push(num);
        i++;
    }
}

console.log(arr);
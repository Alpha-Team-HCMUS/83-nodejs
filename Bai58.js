//chỉ ra số hạng thứ k
var n = 10;
var k = 3;
var arr = [];
for(var i = 0; i < n; i++){
    arr[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

var arr2 = new Int16Array(arr);
for(var i = 0; i < arr2.length - 1; i++){
    for(var j = i + 1; j < arr2.length; j++){
        if(arr2[i] < arr2[j]){
            var temp = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp;
        }
    }
}
console.log(`Mảng là: ${arr} `);
console.log(`Số hạng lớn thứ ${k} là ${arr2[k-1]}`);
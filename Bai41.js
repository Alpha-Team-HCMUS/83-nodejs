// Tính giá trị trung bình của sht trong mảng các số nguyên.

// Kiểm tra là số hoàn thiện.
function KiemTraSHT(n)
{
    var tam = 0;
    for (var i = 1; i < n; i++)
    {
        if (n % i == 0)
        {
            tam += i;
        }
    }

    if(tam == n)
    {
        return 1;
    }
    return 0;
}

// Trung bình các số hoàn thiện.
function TrungBinhSHT(m)
{
    var tong = 0;
    var dem = 0;
    for (var i = 0; i < m.length; i++)
    {
        if (KiemTraSHT(m[i]) == 1)
        {
            tong += m[i];
            dem++;
        }
    }
    return 1.0 * tong / dem;
}

var m = [];
// Thử với 2 phần tử là sht.
m[0] = 6;
m[1] = 6;
// Khởi tạo mảng.
for (var i = 2; i < 10; i++)
{
    m[i] = Math.floor(Math.random() * (11 - 1) + 10);
}

console.log(m);
console.log("Trung bình số hoàn thiện trong mảng: " + `${TrungBinhSHT(m)}`);
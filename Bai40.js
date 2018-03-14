// Tổng các số hoàn thiện trong mảng số nguyên.

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

// Tổng các số hoàn thiện.
function TongSHT(m)
{
    var tong = 0;
    for (var i = 0; i < m.length; i++)
    {
        if (KiemTraSHT(m[i]) == 1)
        {
            tong += m[i];
        }
    }
    return tong;
}

var m = [];
// Thử với 2 phần tử là sht.
m[0] = 6;
m[1] = 6;
// Khởi tạo mảng.
for (var i = 2; i < 10; i++)
{
    m[i] = m[i] = Math.floor(Math.random() * (11 - 1) + 10);
}

console.log(m);
console.log("Tổng số hoàn thiện trong mảng: " + `${TongSHT(m)}`);
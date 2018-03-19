// Tìm phần tử xuất hiện nhiều nhất.

function TimPhanTuXuatHienNhieuNhat(m)
{
    var chiSo = -1;
    var dem1 = 0;
    var dem2 = 0;

    for (var i = 0; i < m.length - 1; i++)
    {
        for (var j = i + 1; j < m.length; j++)
        {
            if (m[i] == m[j])
            {
                dem1++;
            }
        }
        if (dem1 > dem2)
        {
            dem2 = dem1;
            dem1 = 0;
            chiSo = i;
        }
        dem1 = 0;
    }
    return m[chiSo];
}

var m = [];
for(var i = 0; i < 10; i++)
{
    m[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(m);
var kq = TimPhanTuXuatHienNhieuNhat(m);
if (kq != null)
{
    console.log("Giá trị lập nhiều nhất là: " + kq);
}
else
{
    console.log("Mảng không có phần tử hợp lệ!!!");
}
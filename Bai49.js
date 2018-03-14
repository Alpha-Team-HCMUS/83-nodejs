// Viết hàm xóa phần tử có giá trị lớn nhất trong mảng.

// Tìm Max.
function TimMax(m)
{
    var max = m[0];
    for (var i = 0; i < m.length; i++)
    {
        if (m[i] >max)
        {
            max = m[i];
        }
    }
    return max;
}

// Xóa Max.
function XoaMax(m)
{
    var max = TimMax(m);
    for (var i = 0; i < m.length; i++)
    {
        if (m[i] == max)
        {
            for (var j = i; j < m.length - 1; j++)
            {
                m[j] = m[j+1];
            }
            m.length--;
        }
    }
}

var m = [];
// Khởi tạo mảng.
for (var i = 0; i < 10; i++)
{
    m[i] = Math.floor(Math.random() * (11 -1) + 10);
}

console.log(m);
XoaMax(m);
console.log("Mảng sau khi xóa các phần tử max: ");
console.log(m);
// Xóa phần tử tại vị trí lẻ trong mảng.

function XoaViTriLe(m)
{
    for (var i = 1; i < m.length; i++)
    {
        if (i % 2 != 0)
        {
            m[i] = 0;
        }
    }
    for (var i = 0; i < m.length; i++)
    {
        if (m[i] == 0)
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
XoaViTriLe(m);
console.log("Mảng sau khi xóa các vị trí lẻ: ");
console.log(m);
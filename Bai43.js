// Tăng dần SNT trong mảng.


// Hàm kiểm tra SNT
function KiemTraSNT(n)
{
    if (n > 2)
    {
        for (var i = 2; i < n; i++)
        {
            if (n % i == 0)
            {
                return 0;
            }
        }
    }
    else if (n == 2)
    {
        return 1;
    }
    return 1;
}

// Hàm sắp xếp snt.
function TangDanSNT(m)
{
    for (var i = 0; i < m.length - 1; i++)
    {
        if (KiemTraSNT(m[i]) == 1)
        {
            for (var j = i + 1; j < m.length; j++)
            {
                if (KiemTraSNT(m[j]) == 1)
                {
                    if (m[i] > m[j])
                    {
                        // Hoán vị
                        var tam = m[i];
                        m[i] = m[j];
                        m[j] = tam;
                    }
                }
            }
        }
        
    }
}

var m = [];
// Khởi tạo mảng.
for (var i = 0; i < 10; i++)
{
    m[i] = Math.floor(Math.random() * (11 - 1) + 1);
}

console.log(m);
TangDanSNT(m);
console.log("Mảng với SNT tăng dần: ");
console.log(m);
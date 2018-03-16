// Chẵn giảm dần.

// Hàm kiểm tra chẵn.
function KiemTraChan(n)
{
    for (var i = 0; i < n; i++)
    {
        if (n % 2 == 0)
        {
            return 1;
        }
    }
    return 0;
}

// Hàm sắp xếp các số chẵn giảm dần.
function ChanGiamDan(m)
{
    for (var i = 0; i < m.length - 1; i++)
    {
        if (KiemTraChan(m[i]) == 1)
        {
            for (var j = i + 1; j < m.length; j++)
            {
                if (KiemTraChan(m[j]) == 1)
                {
                    if (m[i] < m[j])
                    {
                        // Hoán vị.
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
    m[i] = Math.floor(Math.random() * (11 + 11) - 11);
}

console.log(m);
ChanGiamDan(m);
console.log("Mảng với số chẵn giảm dần: ");
console.log(m);
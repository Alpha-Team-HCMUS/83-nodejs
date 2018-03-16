// Chẵn bên trái tăng dần - lẻ bên phải giảm dần.

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

// Hàm kiểm tra lẻ.
function KiemTraLe(n)
{
    for (var i = 0; i < n; i++)
    {
        if (n % 2 != 0)
        {
            return 1;
        }
    }
    return 0;
}

function SapChanTraiLePhai(m)
{
    for (var i = 0; i < m.length - 1; i++)
    {
        if (KiemTraLe(m[i]) == 1)
        {
            for (var j = i + 1; j < m.length; j++)
            {
                if (KiemTraChan(m[j]) == 1)
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

// Hàm sắp xếp chẵn tăng dần, lẻ giảm dần.
function SapChanTangDanLeGiamDan(m)
{
    for (var i = 0; i < m.length - 1; i++)
    {
        if (KiemTraChan(m[i]) == 1)
        {
            for (var j = i + 1; j < m.length; j++)
            {
                if (KiemTraChan(m[j]) == 1)
                {
                    if (m[i] > m[j])
                    {
                        // Hoán vị.
                        var tam = m[i];
                        m[i] = m[j];
                        m[j] = tam;
                    }
                }
            }
        }
        else
        {
            for (var j = i + 1; j < m.length; j++)
            {
                if (KiemTraLe(m[j]) == 1)
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
SapChanTraiLePhai(m);
SapChanTangDanLeGiamDan(m);
console.log("Mảng với số chẵn tăng dần - lẻ giảm dần: ");
console.log(m);
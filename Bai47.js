// Âm giảm dần từ trái qua phải - dương tăng dần từ phải qua trái.

function DuongThinhAmSuy(m)
{
    for (var i = 0; i < m.length - 1; i++)
    {
        if (m[i] < 0)
        {
            for (var j = i + 1; j < m.length; j++)
            {
                if (m[j] < 0)
                {
                    if (m[i] < m[j])
                    {
                        // Hoán vị
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
                if (m[j] >= 0)
                {
                    if (m[i] < m[j])
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
    m[i] = Math.floor(Math.random() * (11 + 11) - 11);
}

console.log(m);
DuongThinhAmSuy(m);
console.log("Mảng với số âm giảm dần từ trái qua phải - chẵn tăng dần từ phải qua trái: ");
console.log(m);
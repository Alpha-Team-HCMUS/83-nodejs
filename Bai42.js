// Sắp xếp mảng theo thứ tự giảm dần.

function MangGiamDan(m)
{
    for (var i = 0; i < m.length - 1; i++)
    {
        for (var j = i + 1; j < m.length; j++)
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

var m = [];
// Khởi tạo mảng.
for (var i = 0; i < 10; i++)
{
    m[i] = Math.floor(Math.random() * (11 + 11) - 11);
}

console.log(m);
MangGiamDan(m);
console.log("Mảng giảm dần: ");
console.log(m);
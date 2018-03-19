// Tìm chẵn nhỏ nhất và nhỏ hơn mọi giá trị lẻ trong mảng.


// Tìm lẻ đầu.
function TimLeDau(m)
{
    var le = 0;
    for (var i = 0; i < m.length; i++)
    {
        if (m[i] % 2 != 0)
        {
            le = m[i];
            return le;
        }
    }
    return le;
}

// Tìm chẵn đầu.
function TimChanDau(m)
{
    var chanDau = 0;
    for (var i = 0; i < m.length; i++)
    {
        if (m[i] % 2 == 0)
        {
            chanDau = m[i];
            return chanDau;
        }
    }
    return chanDau;
}

// Tim chẵn min.
function TimChanMin(m)
{
    var min = TimChanDau(m);
    if (min != 0)
    {
        for (var i = 0; i < m.length; i++)
        {
            if (m[i] % 2 == 0 && m[i] < min)
            {
                min = m[i];
            }
        }
    }
    return min;
}

// Tìm chẵn min < lẻ min
function TimChanMinNhoHonLeMin(m)
{
    var min = TimChanMin(m);
    var leMin = TimLeDau(m);
    if (min != 0)
    {
        for (var i = 0; i < m.length; i++)
        {
            if (m[i] % 2 != 0 && m[i] < leMin)
            {
                leMin = m[i];
            }
        }
        if (min < leMin)
        {
            return min;
        }
        else
        {
            return 0;
        }
    }
    return 0;
}

// Tạo mảng.
var m = [];
for(var i = 0; i < 10; i++)
{
    m[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(m);
var kq = TimChanMinNhoHonLeMin(m);
if (kq != 0)
{
    console.log("Phần tử lẻ lớn hơn các phần tử chẵn trong mảng: " + `${TimChanMinNhoHonLeMin(m)}`);
}
else
{
    console.log("Mảng không có phần tử hợp lệ!!!");
}
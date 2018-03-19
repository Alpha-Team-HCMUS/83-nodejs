// Số lẻ min > chẵn trong mảng.

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

// Tìm chẳn đầu.
function TimChanDau(m)
{
    var chan = 0;
    for (var i = 0; i < m.length; i++)
    {
        if (m[i] % 2 == 0)
        {
            chan = m[i];
            return chan;
        }
    }
    return chan;
}

// Tìm ChanMax
function TimChanMax(m)
{
    var max = TimChanDau(m);
    if (max != 0)
    {
        for (var i = 0; i < m.length; i++)
        {
            if (m[i] % 2 == 0)
            {
                if (m[i] > max)
                {
                    max = m[i];
                }
            }
        }
        return max;
    }
    return max;
}

function TimLeMinLonHonChanMax(m)
{
    var min = TimLeDau(m);
    var chanMax = TimChanMax(m);
    if (min != 0)
    {
        for (var i = 0; i < m.length; i++)
        {
            if (m[i] % 2 != 0 && m[i] < min)
            {
                min = m[i];
            }
        }
        // Tìm lẻ min > chẵn max
        if(min > chanMax)
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
var kq = TimLeMinLonHonChanMax(m);
if (kq != 0)
{
    console.log("Phần tử lẻ lớn hơn các phần tử chẵn trong mảng: " + `${TimLeMinLonHonChanMax(m)}`);
}
else
{
    console.log("Mảng không có phần tử hợp lệ!!!");
}

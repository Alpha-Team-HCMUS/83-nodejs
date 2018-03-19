// Đếm và liệt kê các mảng con tăng dần.

function DuyetMangConHienCo(m)
{
    var mangCon = [];   // Ghi lại các mảng con.
    var soLuongPhanTu = []; // Ghi lại số các phần tử từng mảng con.
    var dem = 0;
    var demMang = 0;
    var chiSo = 0;  // mảng soLuongPhanTu;
    for (var i = 0; i < m.length; i++)
    {
        if (m[i] < m[i+1])
        {
            mangCon.push(m[i]);
            dem++;
        }
        else
        {
            if (dem > 0)
            {
                mangCon.push(m[i]);
                dem++;
                soLuongPhanTu.push(dem);
                dem = 0;
                demMang++;
            }
        }
    }
    // In các thành phần.
    //console.log(mangCon);
    //console.log(soLuongPhanTu);
    console.log("Có " + demMang + " mảng con: ");
    var dem = 0;
    for (var i = 0; i < soLuongPhanTu.length; i++)
    {
        
        console.log("Mảng con thứ " + `${i + 1}` + ": ");
        while(soLuongPhanTu[i] > 0)
        {
            console.log(mangCon[chiSo]);
            soLuongPhanTu[i]--;
            chiSo++;
        }
    }
}

var m = [];
for(var i = 0; i < 10; i++)
{
    m[i] = Math.floor(Math.random() * (100 - 1) + 1);
}
console.log(m);
DuyetMangConHienCo(m);
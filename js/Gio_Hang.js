$(document).ready(function(){
    $("#them").click(function(){
        var sotien = soluong * sotien;
        var soluong = parseInt("<input type = 'nummber' value = '1'>");
        var gia = parseInt("7,990,000");
        var ten = "Robot hút bụi Rapido R8S";
        var hinh = "<img src ='../image/home/111_ban.jpg'>";
        var check = "<input type = 'checkbox'>";
        var trnew = "<tr> <td>"+check+"</td> <td>"+hinh+"</td> <td>"+ten+"</td> <td>"+gia+"</td> <td>"+soluong+"</td> <td>"+sotien+"</td> </tr>";
        $("#table-giohang").append(trnew);
    })
})
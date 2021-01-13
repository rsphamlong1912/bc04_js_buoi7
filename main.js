
//THÊM SỐ NGUYÊN VÀO MẢNG TỪ USER
var list_n = [];
function themMang(){
    var input_n = +document.getElementById("n").value;
    list_n.push(input_n);
}

//XEM MẢNG 
function xemMang(){
    document.getElementById("cardFooter").innerHTML = "Mảng hiện tại: [" + list_n +"]";
}

//TÍNH TỔNG SỐ DƯƠNG TRONG MẢNG
function tongSoDuong(){
    var tong_duong = 0;
    for (i=0; i< list_n.length; i++) {
        if (list_n[i]>0){
            tong_duong += list_n[i];
        }
    }
    document.getElementById("cardFooter").innerHTML = "Tổng các số dương trong mảng là: "+ tong_duong;
}

//ĐẾM SỐ DƯƠNG TRONG MẢNG
function demSoDuong(){
    var sl_duong= 0;
    for (i=0; i< list_n.length; i++) {
        if (list_n[i]>0){
            sl_duong +=1;
        }
    }
    document.getElementById("cardFooter").innerHTML = "Số lượng số dương trong mảng là: "+ sl_duong;
}

//TÌM SỐ NHỎ NHẤT TRONG MẢNG
function soNhoNhat(){
    var min = list_n[0];
    for (i=1; i< list_n.length; i++) {
        if (list_n[i]<min){
            min = list_n[i];
        }
    }
    document.getElementById("cardFooter").innerHTML = "Số nhỏ nhất trong mảng là: "+ min;
}

//TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
var list_duong =[]
function soDuongNhoNhat(){
    for (i=0; i< list_n.length; i++) {
        if (list_n[i]>0){
            list_duong.push(list_n[i]);
        }
        var min_duong = list_duong[0];
        for (j=1; j< list_duong.length; j++){
            if (list_duong[j]< min_duong){
                min_duong = list_duong[j];
            }
        }
    }
    document.getElementById("cardFooter").innerHTML = "Số dương nhỏ nhất trong mảng là: "+ min_duong;
}

//SẮP XẾP SỐ TRONG MẢNG
function sapXep(){
    for (i=0; i< list_n.length -1; i++){
        for (j= i+1; j < list_n.length; j++){
            if(list_n[i]>list_n[j]){
                temp = list_n[i];
                list_n[i]= list_n[j];
                list_n[j]= temp;
            }
        }
    }
    document.getElementById("cardFooter").innerHTML = "Mảng sau khi sắp xếp là: "+ list_n;
}

//TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG, NẾU KHÔNG CÓ TRẢ VỀ -1
var list_chan =[]
function soChanCuoi(){
    for (i=0; i< list_n.length; i++) {
        if (list_n[i]%2==0){
            list_chan.push(list_n[i]);
        }
        var so_chan_cuoi = -1;
        for (j=0; j< list_chan.length; j++){
            if (list_chan[j]%2==0){
                so_chan_cuoi = list_chan[j];
            }
        }
    }
    document.getElementById("cardFooter").innerHTML = "Số chẳn cuối cùng trong mảng là: "+ so_chan_cuoi;
}

//ĐỔI 2 VỊ TRÍ TRONG MẢNG
function doiViTri(){
    var viTri1 = +document.getElementById("doiA").value;
    var viTri2 = +document.getElementById("doiB").value;
    var temp;
    if ((viTri1 > list_n.length) || (viTri2> list_n.length)){
        var tb = document.getElementById("cardFooter");
        tb.innerHTML = "*Bạn nhập vị trí không hợp lệ! "+"<br>"+"Vui lòng nhập lại"
        tb.style.color = "red";
    }else{
        temp = list_n[viTri1-1];
        list_n[viTri1-1]= list_n[viTri2-1];
        list_n[viTri2-1]= temp;
        document.getElementById("cardFooter").innerHTML = "Sau khi đổi vị trí: ["+ list_n+"]";
    }
}



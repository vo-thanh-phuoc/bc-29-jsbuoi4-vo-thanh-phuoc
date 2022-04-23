/*
* bài tập 1: sắp xếp 3 số theo thứ tự tăng dần
+Đầu vào
- Nhập ba số
+Xử lý
-Thực hiện các phép so sánh giữa ba số có 6 trường hợp
a<b<c;b<a<c;b<c<a;a<c<b;c<a<b;c<b<a.
+Đầu ra
-xuất kết quả tăng dần sau khi so sánh ba số
*/
document.getElementById("thucHienSapXepSo").onclick=function(){
    var nhapSoThuNhat=document.getElementById("soThuNhat").value*1;
    var nhapSoThuHai=document.getElementById("soThuHai").value*1;
    var nhapSoThuBa=document.getElementById("soThuBa").value*1;
    if(nhapSoThuNhat<nhapSoThuHai&&nhapSoThuHai<nhapSoThuBa){
        var result="số được sắp xếp tăng dần là: "+nhapSoThuNhat+"<"+nhapSoThuHai+"<"+nhapSoThuBa;

    }else if(nhapSoThuHai<nhapSoThuNhat&&nhapSoThuNhat<nhapSoThuBa){
        var result="số được sắp xếp tăng dần là: "+nhapSoThuHai+"<"+nhapSoThuNhat+"<"+nhapSoThuBa;

    }else if(nhapSoThuHai<nhapSoThuBa&&nhapSoThuBa<nhapSoThuNhat){
        var result="số được sắp xếp tăng dần là: "+nhapSoThuHai+"<"+nhapSoThuBa+"<"+nhapSoThuNhat;

    }else if(nhapSoThuNhat<nhapSoThuBa&&nhapSoThuBa<nhapSoThuHai){
        var result="số được sắp xếp tăng dần là: "+nhapSoThuNhat+"<"+nhapSoThuBa+"<"+nhapSoThuHai;

    }else if(nhapSoThuBa<nhapSoThuHai&&nhapSoThuHai<nhapSoThuNhat){
        var result="số được sắp xếp tăng dần là: "+nhapSoThuBa+"<"+nhapSoThuHai+"<"+nhapSoThuNhat;

    } else if(nhapSoThuNhat===nhapSoThuHai===nhapSoThuBa||nhapSoThuNhat===nhapSoThuHai||nhapSoThuNhat===nhapSoThuBa||nhapSoThuHai===nhapSoThuBa){
        var result="Không được nhập số trùng nhau. Yêu cầu nhập lại";
    }
    else{
        var result="số được sắp xếp tăng dần là: "+nhapSoThuBa+"<"+nhapSoThuNhat+"<"+nhapSoThuHai;

    }
document.getElementById("ketQua1").innerHTML=result;
};

/*
*bài tập 2: Xuất câu chào các thành viên trong gia đình khi sử dụng máy tính
+Đầu vào
nhập thông tin người dùng theo yêu cầu
+Xử lý
nếu nhập vào là bố,Mẹ Anh trai, Em gái thì sẽ hiện lời chào
Chào Bố, Chào Mẹ,Chào Anh trai, Chào Em gái.
+Đầu ra
Xuất hiện Thông báo

 */
document.getElementById("btn-chao").onclick=function(){
    var thanhVienTrongGiaDinh=document.getElementById("ThanhVienSuDungMay").value;
    if(thanhVienTrongGiaDinh=="Bố"){
        var result="Thông báo: Xin chào Bố";
    }else if(thanhVienTrongGiaDinh=="Mẹ"){
        var result="Thông báo:Xin chào Mẹ";
    }else if(thanhVienTrongGiaDinh=="Anh trai"){
        var result="Thông báo:Xin chào Anh trai"; 
    }
    else{
        var result="Thông báo:Xin chào Em gái";    
    };
    
    document.getElementById("ketQua2").innerHTML=result;
};

/*
*Bài 3: Có bao nhiêu số chẵn và lẻ trong 3 số.
+Đầu vào
-Nhập vào 3 số nguyên
+xử lý
-Thực hiện phép chia lấy số dư cho 3 số vừa nhập
- lấy kết quả so sánh
nếu ===0 thì đó là số chẵn, nếu !==0 thì đó là số lẻ.
+Đầu ra
xuất ra màn hình có bao nhiêu số chẵn và bao nhiêu số lẻ.
 */
document.getElementById("sapXepSoChanLe").onclick=function(){
        var nhapSoThu1=document.getElementById("nhapSo1").value*1;
        var nhapSoThu2=document.getElementById("nhapSo2").value*1;
        var nhapSoThu3=document.getElementById("nhapSo3").value*1;
        if(nhapSoThu1%2===0&&nhapSoThu2%2===0&&nhapSoThu3%2===0){
            var result="Số chẵn:3 <br/>"+"Số lẻ:0";
        }else if(nhapSoThu1%2!==0&&nhapSoThu2%2!==0&&nhapSoThu3%2!==0){
            var result="Số chẵn:0 <br/>"+"Số lẻ:3";
        }else if(nhapSoThu1%2===0&&nhapSoThu2%2!==0&&nhapSoThu3%2!==0||nhapSoThu1%2!==0&&nhapSoThu2%2===0&&nhapSoThu3%2!==0||nhapSoThu1%2!==0&&nhapSoThu2%2!==0&&nhapSoThu3%2===0){
            var result="Số chẵn:1 <br/>"+"Số lẻ:2";
        }else {nhapSoThu1%2===0&&nhapSoThu2%2===0&&nhapSoThu3%2!==0||nhapSoThu1%2===0&&nhapSoThu2%2!==0&&nhapSoThu3%2===0||nhapSoThu1%2!==0&&nhapSoThu2%2===0&&nhapSoThu3%2===0
            var result="Số chẵn:2 <br/>"+"Số lẻ:1";
        };
            
        
        
document.getElementById("ketQua3").innerHTML=result;
};

/*
*Bài tập 4: nhập 3 cạnh tam giác xuất ra thông báo đó là tam giác gì.
 */
document.getElementById("phanLoaiTamGiac").onclick=function(){
    var canhA =document.getElementById("nhapCanhA").value*1;
    var canhB =document.getElementById("nhapCanhB").value*1;
    var canhC =document.getElementById("nhapCanhC").value*1;
    if(canhA===canhB&&canhA===canhC){
        var result="Đây là tam giác điều";
    }else if(canhA===canhB&&canhA!==canhC||canhA===canhC&&canhA!==canhB||canhB===canhC&&canhB!==canhA){
        var result="Đây là tam giác cân";
    }else if(canhA*canhA===canhB*canhB+canhC*canhC||canhB*canhB===canhA*canhA+canhC*canhC||canhC*canhC===canhA*canhA+canhB*canhB){
        var result="Đây là tam giác vuông";
    } else{
        var result="Đây là tam giác thường";
    }

    document.getElementById("ketQua4").innerHTML=result;
}

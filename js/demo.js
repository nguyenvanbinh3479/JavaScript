////////////////////////////////////////////////////////////////////////khai báo biến/////////////////////////////////////////////////////////////
// var username;//khái báo tên biến
// username="binhnguyen.net";//gán giá trị cho tên biến
// document.write(username);
// //////////////////////////////////////////////////////////////////////alert-confirm-prompt/////////////////////////////////////////////////////
// alert("xin chào các bạn");//in một thông báo popup
// confirm("do you like me");//đưa vể 2 giá trị tre false
// var t=prompt("nhập tên của bạn");
// alert(t);
//////////////////////////////////////////////////////////////////////toán-tử/////////////////////////////////////////////////////////////////////
// var a=5,b=6,c=8,d=12,e=10;
// alert(a+b-c*d/e);
// alert(++c);
// var f=b+c;
// alert(f);
/////////////////////////////////////////////////////
// var a, b;
// // Lấy giá trị từ ngươi dùng
// a = prompt("Nhập số a");
// b = prompt("Nhập số b");
         
// // Đổi sang kiểu Number
// a = parseInt(a);//cần thiết
// b = parseInt(b);
             
// // In kết quả ra trình duyệt
// document.write("Tổng hai số " + a + " và " + b + " là " + (a + b) + "<br/>");
// document.write("Hiệu hai số " + a + " và " + b + " là " + (a - b) + "<br/>");
// document.write("Tích hai số " + a + " và " + b + " là " + (a * b) + "<br/>");
// document.write("Thương hai số " + a + " và " + b + " là " + (a / b) + "<br/>");
// document.write("Phần dư khi chia hai số " + a + " và " + b + " là " + (a % b) + "<br/>");
////////////////////////////////////////////////////////////////////////////////////////////////
// var a = 12;
// var b = 5;
 
// // TOÁN TỬ TOÁN HỌC
// document.write( "a + b = "  + (a + b)  + "<br/>");
// document.write( "a - b = "  + (a - b)  + "<br/>");
// document.write( "a * b = "  + (a * b)  + "<br/>");
// document.write( "a / b = "  + (a / b)  + "<br/>");
// document.write( "a % b = "  + (a % b)  + "<br/>");
 
// // TOÁN TỬ GÁN
// document.write( "a = b = "  + (a % b)  + "<br/>");
// document.write( "a += b = "  + (a += b)  + "<br/>");
// document.write( "a -= b = "  + (a -= b)  + "<br/>");
// document.write( "a *= b = "  + (a *= b)  + "<br/>");
// document.write( "a /= b = "  + (a /= b)  + "<br/>");
// document.write( "a %= b = "  + (a %= b)  + "<br/>");
//////////////////////////////////////////////////////////////////////////////////if-else/////////////////////////////////////////////////////////
// var x=12;
// if(x>12)
// {
// 	alert("x>12");
// }
// else
// { 
// 	if(x<12)
// 	{
// 		alert("x<12");
// 	}
// 	else
// 	{
// 		alert("x=12");
// 	}
// }
////////////////////////////////////////////////////////////////tính tổng 2 số lớn hơn 5
// confirm("tính tổng 2 số lớ hơn 5");
// var a=prompt("nhập số a lớn hơn 5 ");
// a=parseInt(a);
// if(a>5)
// {
// 	var b=prompt("nhập số b lớn hơn 5");
// 	b=parseInt(b);
// 	if(b>5)
// 	{
// 		alert("tổng của "+a+" và "+b+" là: "+(a+b));
// 	}
// 	else
// 		if(b<5)
// 		{
// 			alert("số b của bạn nhỏ hơn 5");
// 		}
// 		else
// 		{
// 			alert("số b của bạn = 5");
// 		}
// }
// else 
// 	if(a<5)
// 	{
// 		alert("số a của bạn nhỏ hơn 5");
// 	}
// 	else
// 	{
// 		alert("số a của bạn = 5");
// 	}
////////////////////////////////////////////////////////////////////tìm min max 2 số
// var a=(prompt("nhập số a"));
// a=parseInt(a);
// var b=(prompt("nhập số b"));
// b=parseInt(b);
// if(a>b)
// {
// 	alert("số lớn nhất là a = "+a+" và số bé nhất là b = "+b);
// }
// else
// {
// 	alert("số lớn nhất là b = "+b+" và số bé nhất là a = "+a);
// }
/////////////////////////////////////////////////////////////////////tìm 2 số chia hết cho 2
// var a=(prompt("nhập số a"));
// a=parseInt(a);
// var b=(prompt("nhập số b"));
// b=parseInt(b);
// if(a%2==0)
// 	if(b%2==0)
// 	{
// 		alert("a = "+a+" và b = "+b+" là 2 số chia hết cho 2");
// 	}
// 	else
// 	{
// 		alert("a = "+a+" là số chia hết cho 2"+" và b = "+b+" là số không chia hết cho 2");
// 	}
// else
// 	if(b%2==0)
// 	{
// 		alert("b = "+b+" là số chia hết cho 2"+" và a = "+a+" là số không chia hết cho 2");
// 	}
// 	else
// 		{
// 			alert("a = "+a+" và b = "+b+" là 2 số không chia hết cho 2");
// 		}
///////////////////////////////////////////////////////////////////////////////////switch-case////////////////////////////////////////////////////
// var number = parseInt(prompt("Nhập số cần kiểm tra"));//chuyển dữ liệu người nhập sang number
// var mod = (number % 2);
// switch (mod)
// {
//     case 0 : {
//         document.write(number + " là số chẵn");
//         break;
//     }
//     case 1: {
//         document.write(number + " là số lẽ");
//         break;
//     }
//     default : {
//         document.write("Ký tự bạn nhập không phải số");
//     }
// }
////////////////////////////////////////////////////////////////////////
// var color = prompt("bạn thích màu nào trong 3 màu cơ bản");
// switch (color){
//     case 'đỏ' : 
//     case 'vàng' : 
//     case 'xanh dương' :
//     case 'xanh trời' : 
//         document.write("Bạn thích màu "+color+" sao");
//         break; 
//     default :
//         document.write("Màu bạn nhập không có trong hệ thống");
// }
///////////////////////////////////////////////////////////////////////////////////////funnction//////////////////////////////////////////////////
// function check_number(number)//hàm function
// {
//     if (number % 2 == 0){
//         alert(number + ' là số chẵn');
//     }
//     else {
//         alert(number + ' là Số lẻ');
//     }
// }
// alert("kiểm tra số chẳn hay lẻ")
// check_number(prompt("bạn muốn kiểm tra số nào"));// Sử dụng hàm kiểm tra cho 5 số
///////////////////////////////////////////////////////////////////////////////////////
// function tinhtong(a,b)
// {
// 	return a+b;///có return
// }
// var x=3;
// var y=2;
// var ketqua=tinhtong(x,y);
// alert(ketqua);
///////////////////////////////////////////////////////////////////////
// function tinhtong(a,b)
// {
// 	document.write("tổng là "+(a+b));///không dùng return
// }
// var x=3;
// var y=2;
// tinhtong(x,y); 
///////////////////////////////////////////////////////////////////////////////////////
// function showMessage(message)
// {
//    // Nếu message không được truyền vào hoặc giá trị nó là rỗng
//    // thì sẽ được thay thế bằng giá trị 'Không có tin nhắn'
//    message = message || 'Không có tin nhắn <br/>';//hoặc đưa về cả hai giá trị
//    document.write(message);
// }
 
// // Cách 1: không truyền tham số
// showMessage();
 
// // Cách 2: Truyền tham số
// showMessage('Chào mừng bạn đến với freetuts.net');
////////////////////////////////////////////////////////////////////////////////////kểm tra năm nhuận
// function namnhuan(nam)
// {
// 	if(nam%100==0)
// 		if(nam%400==0)
// 		{
// 			alert(nam+" là năm nhuận");
// 		}
// 		else
// 			{
// 				alert(nam+" không phải là năm nhuận");
// 			}
// 	else
// 		if(nam%4==0)
// 		{
// 			alert(nam+" là năm nhuận");
// 		}
// 		else
// 		{
// 			alert(nam+" không phải là năm nhuận");
// 		}
// }
// namnhuan(prompt("nhập năm cần kiểm tra"));
/////////////////////////////////////////////////////////////////////////////////////biến toàn cục  và biến cục bộ////////////////////////////////
/////////////////////////////////////////////////////không bị ảnh hưởng
// var comment = "Nội dung comment toàn cục";
   
// // Hàm có sử dụng biến toàn cục
// function add_comment()
// {
//     var comment = "Nội dung comment cục bộ";///có var 
//     alert(comment);
// }
   
// // Gọi fuction comment
// add_comment();
   
// // In biến toàn cục
// alert(comment);
///////////////////////////////////////////////////////////bị ảnh hưởng
 // Biến toàn cục
// var comment = "Nội dung comment trước khi thay đổi";
 
// // Hàm có sử dụng biến toàn cục
// function add_comment()
// {
//    comment = "Nội dung comment đa bị thay đổi";// không có var
//    alert(comment);
// }
 
// // Gọi fuction comment
// add_comment();
 
// // In biến toàn cục
// alert(comment);
////////////////////////////////////////////////////////////////////////////lệnh console.log()////////////////////////////////////////////////////
// var web="binhnguyen.net";
// console.log(web);
/////////////////////////////////////////////////
// var info = {
//     website : "binhnguyen.net",
//     email : "nguyenvanbinh@gmail.com",
//     address : "Hải Lăng, Quảng Trị"
// };
// console.log(info);
/////////////////////////////////////////////////////////////////////////////hàm setTimeout() và setInterval()////////////////////////////////////
////////////////////////////////////////////////setTimeout
// setTimeout(function(){
// 	alert("xin chòa mấy chế");//lặp 1 lần
// }, 300);
// ////////////////////////////////////////////////////////
// hành động
// var do_alert = setTimeout(function(){
//         alert("Chào mừng bạn ");
//     }, 3000);
 
//     function clearAlert()
//     {
//         clearTimeout(do_alert);
//     }
// /////////////////////////////////////////////////////setInterval
// setInterval(function(){
//     alert("Chào mừng bạn ");//lặp liên tục
// }, 3000);
// //////////////////////////////////////////////////////////////////
// var do_alert = setInterval(function(){
//         alert("Chào mừng bạn ");
//     }, 3000);
 
//     function clearAlert()
//     {
//         clearInterval(do_alert);
//     }
///////////////////////////////////////////////////////////////////////////////////vòng lặp for///////////////////////////////////////////////////
// var i;
// for(i=0;i<10;i++)
// {
// 	document.write(i+'</br>');
// }
// ///////////////////////////////////////////////////////////////////////
// var i;
// var n=2;
// for(i=0;i<=10;i+=n)
// {
// 	document.write(i+'</br>');
// }
// /////////////////////////////////////////////////vòng lặp vô tận
// for(i=1;i<10;i--)
// {
// 	document.write(i+'</br>');
// }
// /////////////////////////////////////////////////////////////////for lồng nhau
// for(i=0;i<=9;i++)
// {
// 	for(j=0;j<=9;j++)
// 	{
// 		document.write("(["+i+"]["+j+"])");
// 	}
// 	document.write("</br>");
// }
// ////////////////////////////////////////////in ra các số chia hết cho 3 từ 0->100
// for(i=0;i<=100;i++)
// {
// 	if(i%3==0)
// 		document.write(i+"</br>");
// }
//////////////////////////////////////////////////////////////////////////////////////while do while//////////////////////////////////////////////
// /////////////////////////////while
// var i=1;
// while(i<10)
// {
// 	document.write(i+"</br>");
// 	i++;
// }
// ////////////////////////////////////////////////////////do while
// Biến lưu giá trị người dùng nhập vào
// var value = null;
 
// // Thực thi 
// do {
//     value = prompt("Nhập vào số từ 1 -> 10");
// }
// while (value < 1 || value > 10);
 
// // Sau khi nhập đúng thì in ra màn hình
// alert("Số bạn vừa nhập là " + value);
// //////////////////////////////////////////////while lồng
// var i = 0;
// // Vòng lặp ngoài
// while (i <= 9)
// {
//     // Mỗi lần lặp gan j = 0;
//     var j = 0;
//     // Lặp nếu j < <=
//     while (j <= 9)
//     {
//         // In ra màn hình
//         document.write('['+i+']['+j+'] ');
//         // Tăng j lên nếu không sẽ bị lặp vô hạn
//         j++;
//     }
//     // Xuống hàng
//     document.write('<br/>');
//     //Tăng i lên nếu không sẽ bị lặp vô hạn
//     i++;
// }
// ///////////////////////////////////////////////////////////
// var t = '';     
// do {
//     t = prompt('Vui lòng nhập chữ a để kết thúc vòng lặp');
// }
// while (t !== 'a');
/////////////////////////////////////////////////////////////////////////////////////lệnh break-continue//////////////////////////////////////////
// for (var i = 1; i <= 10; i++)
// {
//     document.write(i + " - ");
//     if (i == 5) {
//         document.write("Vòng lặp bị dừng");
//         break;
//     }
// }
// /////////////////////////////////////////////////////
// var i = 1;
// while (i <= 1000)
// {
//   document.write(i + " - ");
//   if (i % 9 == 0) {
//       document.write("Vòng lặp bị dừng");
//       break;
//   }
//   i++;
// }
// /////////////////////////////////////////////////////
// for (var i = 1; i <= 10; i++)
// {
//   if (i == 5) {
//       continue;
//   }
//   document.write(i + " - ");
// }
//////////////////////////////////////////////////////////////////////////////////////Event///////////////////////////////////////////////////////
//Viết chương trình gồm một ô input và một thẻ div dùng để 
//hiển thị nội dung (giá trị của ô input) khi người dùng gõ vào ô input
// function show_result()
// {
// 	var input = document.getElementById('mesage');
// 	var div = document.getElementById('result');
// 	div.innerHTML = input.value;
// 	//gán nội dung vào thẻ div
// }
// ////////////////////////////////////////////////////////////////////////
// //Viết chương trình khi người dùng copy nội dung của website 
// //thì thông báo là bạn đã copy thành công
// function coppy()
// {
// 	alert("bạn đã coppy thành công");
// }
// ////////////////////////////////////////////////////////////////////
// function tinh_tong()
// {
// 	var a = document.getElementById('a');
// 	var b = document.getElementById("b");
// 	var result = document.getElementById("result"); 
// //tính tổng
// 	var tong = parseInt(a.value)+parseInt(b.value);
// //kiểm tra 
// 	if (!isNaN(tong)) {
// 		result.value =tong;//gán giá trị cho ô thứ 3
// 	}
// }
/////////////////////////////////////////////////////////////////////true/false Events////////////////////////////////////////////////////////////
// function validate()
// {
// 	// Lấy giá trị
// 	var username = document.getElementById("username").value;
// 	var password = document.getElementById("password").value;
// 	var re_password = document.getElementById("re-password").value;
// 	// Kiểm tra các giá trị
// 	if (username == ""){
// 		alert("Bạn chưa nhập tên đăng nhập");
// 		return false;
// 	}          
// 	if (password == ""){
// 		alert("Bạn chưa nhập mật khẩu");
// 		return false;
// 	}
// 	if (password != re_password){
// 		alert("Mật khẩu nhập lại không đúng");
// 		return false;
// 	}           
// 	return true
// }
//////////////////////////////////////////////////////////////////////////////////oneload/////////////////////////////////////////////////////////
// alert(1);
// window.onload=function(){
// 	alert(3);
// };
// alert(2);
//////////////////////////////////////////////////////////////////////////////////////addEventListener()//////////////////////////////////////////
// Ví dụ 1: Xây dựng chức năng khi nhập dữ liệu vào ô input thì hiển thị 
// giá trị của ô input đó ra bên ngoài
// var input = document.getElementById("txt-val");
// input.addEventListener('keyup', function(){
//                 // Gán giá trị vào div
//                 document.getElementById('result').innerHTML = input.value;
//             });
/////////////////////////////////////////////////////////////////////////////////////////DOM//////////////////////////////////////////////////////
// // tìm thẻ theo ID
// //lấy thẻ
// var elemet= document.getElementById("website");
// //lấy giá trị của thẻ
// document.write(elemet.value);
//tìm thẻ theo tên của thẻ
// //lấy thẻ
// var onecol = document.getElementByTagName("input");
// // lấy giấ trị của thẻ
// document.write(onecol[0].value);
// // //tìm thẻ theo tên class
// var elemet = document.getElementByClassName('website');
// document.write(elemet[0].value);
// // //tìm thẻ theo cú pháp củ selector css
// var elemet = document.querySelectorAll('div input.website');
// document.write("thẻ cần lấy là " + elemet[0].value);
   // Hàm thiết lập nội dung cho thẻ div#content
      // function set_content()
      // {
      //   document.getElementById("content").innerHTML = "<h1>Nội dung đã được thay đổi</h1>";  
      // }
       
      // // Hàm lấy nội dung cho thẻ div#content
      // function get_content()
      // {
      //   var html = document.getElementById("content").innerHTML;
      //   alert("Nội dung cần lấy là: " + html);        
      // }
/////////////////////////////////////////////////////////////////////////////////////////String///////////////////////////////////////////////////
// var ten = "nguyenvanbinh";
// var lop = "16CDTH31";
// document.write(ten+"\n"+lop);
// //ép chuỗi string
// //befor
// var number = 12;
// document.write(typeof number+"<br>");
// //after
// number = number.toString();
// document.write(typeof number);
//////////////////////////////////////////funtion
//////////////////indexOf Để tìm kiếm chuỗi con thì ta sử dụng hàm String.indexOf(str), trong đó str là chuỗi con và String là chuỗi cha
// var string = "xin chào tất cả các bạn";
// document.write("vị trí xuất hiện từ bạn là: "+string.indexOf("bạn"));
////////////////lastIndexOf lấy chuỗi con cuối cùng
// var string = "chào các bạn rất vui vì được gặp các bạn";
// document.write("từ bạn cuối cùng là: "+string.lastIndexOf("bạn"));
////////////////search để tìm kiếm giống như hàm indexOf
// var string = "chào các bạn";
// document.write("vị trí từ cần tìm là: " + string.search("các"));
// slice()//lấy các phần tư theo số
// var str = "chào bạn";
// document.write(str.slice(5,8));
// var string = "chào các bạn"
// document.write("chuỗi cần lấy là: "+string.slice(5,8));
/////////////// toUpperCase tolowwerCase
// var str = "xin chào các bạn";
// document.write(str.toUpperCase());
// document.write(str.toLowerCase());
///////////////////charAt charCodeAt
// var string = "Welcome freetuts.net";
// document.write(string.charAt(1) + "<br/>");
// document.write(string.charCodeAt(1) + "<br/>");         
/////////////////////////////////////////////////////////////////////////////////////////mảng/////////////////////////////////////////////////////
// var name_array = new Array();
// // Hoặc
// var name_array = new Array(1,2,3);
// var name_array = [];
/////////////truy suất
// var t = new Array(1,2,3);
// alert(t[0]); // kết quả là 1
// alert(t[1]); // kết quả là 2
// alert(t[2]); // kết quả là 3
////////in mảng ra
// var t = new Array(1,2,3);
// document.write(t.join()); // kết quả 1,2,3
// document.write(t.join('-')); // kết quả 1-2-3
// /////////////console.log() để debug
// var arr = new Array(1,2,3);
// console.log(arr);
// ///////////////////.lenght để đếm phần tử trong mảng
// var t = new Array(1,2,3);
// alert(t.length);
// /////////lặp mảng
// var name_array = [1,2,3];
// for (var i = 0; i < name_array.length; i++){
//     document.write(name_array[i]);
// }
///////////////////////////////1 số hàm trong mảng
///////////////////////.valueOf()như hàm .join() nó sẽ nối các phần tử với nhau vào một chuỗi cách nhau bởi dấu phẩy.
// var mang = ["Học", "lập", "trình"];
// document.write(mang.valueOf(""));
///////////////////.push() theemm phần tử vào cuối mảng
// var mang = ["Học", "lập", "trình"];
 
// // in mảng
// document.write(mang.valueOf());
// document.write('<br/>');
 
// // Thêm và in
// mang.push("Miễn phí");
// document.write(mang.valueOf());
//////////////.pop xóa phần tử trong mảng

// var mang = ["Học", "lập", "trình"];
 
// // in mảng
// document.write(mang.valueOf());
// document.write('<br/>');
 
// // Thêm và in
// mang.pop();
// document.write(mang.valueOf());
//////////////////.shift() xóa phần tử đầu tiên của mảng
// var mang = ["Học", "lập", "trình", "tại"];
 
// // in mảng
// document.write(mang.valueOf());
// document.write('<br/>');
 
// // Thêm và in
// mang.shift();
// document.write(mang.valueOf());
//////////////.unshift()thềm phần tử đầu tiên cho mảng
// var mang = ["Học", "lập", "trình", "tại"];
 
// // in mảng
// document.write(mang.valueOf());
// document.write('<br/>');
 
// // Thêm và in
// mang.unshift("chào các bạn");
// document.write(mang.valueOf());
///////////////.splice() thêm vào mảng
// var mang = ["Học", "lập", "trình"];
 
// mang.splice(1, 2, 'PHP', 'căn bản <br>');
// document.write(mang.valueOf());
// ////////////.sort sắp xeeps các phần tử trong mảng
// var mang = ["Học", "lập", "trình", "với", "bình"];
// document.write(mang.valueOf()+'<br/>');
// // Sắp xếp lại
// mang.sort();
// document.write(mang.valueOf()+"<br>");
// ////////////////.reverse hàm đảo vị trí
// var mang = ["Học", "lập", "trình", "với", "bình"];
// document.write(mang.valueOf()+'<br/>');
// // Sắp xếp lại
// mang.reverse();
// document.write(mang.valueOf()+"<br>");
// ////////////.concat() nối hai mảng
// var mang1 = ["Học", "lập", "trình"];
// var mang2 = ["tại", "đây<br><br>"];
// // Nối mảng
// var mang_con = mang1.concat(mang2);
// document.write(mang_con.valueOf());
// ////////////.slice lấy phần tử con trong mảng
// var mang = ["Học", "lập", "trình"];
 
// // Lấy phần tử "tại" và "freetuts.net"
// var mang_moi = mang.slice(1, 3);
 
// // In ra thử
// document.write(mang_moi.valueOf()+"<br>");
// //////////////////////////////////////////////////////////////////////////////////////////number//////////////////////////////////////////////////
// ////////////chuyển sang string
// var number = 128;
// document.write(number.toString(2)+"<br>");// hệ nhị phân
// document.write(number.toString(8)+"<br>");// hệ bát phân
// document.write(number.toString(10)+"<br>");//hệ thập phân
// document.write(number.toString(16)+"<br>");//hệ thập lục phân
// ///////////////.infinity lặp vô tận
// var myNumber = 2;
// while (myNumber != Infinity) {
//     myNumber = myNumber * myNumber;
// }
// document.write("Giá trị của myNumber là: " + myNumber+"<br>");
// ////////////isNaN kiếm tra có phải là number ko
// var x = 2/"s";
// if (isNaN(x)){
//     document.write("NaN<br>");
// }
// /////////các hàm trong number
// ////////.toFixed làm tròn
// var x = 5.656;
// document.write(x.toFixed(0)+"<br>"); // returns 6
// document.write(x.toFixed(2)+"<br>"); // returns 5.66
// document.write(x.toFixed(4)+"<br>"); // returns 5.6560
// document.write(x.toFixed(6)+"<br>"); // returns 5.656000
// /////////////////////////////////////////////////////////////////////////////////////////Date/////////////////////////////////////////////////////
// ////////khởi tạo
// var dateObj = new Date();
// document.write(dateObj+"<br>");
//toUTCString () chuyển đổi một ngày thành chuỗi UTC
// // // Thời gian hiện tại
// // new Date();
 
// // // Tham số truyền vào là mili giây
// // new Date(milliseconds);
 
// // // Tham số truyền vào là chuỗi ngày tháng
// // new Date(dateString);
 
// // // Tham số truyền vào gồm
// // //  - year:         năm
// // //  - month:        tháng
// // //  - day:          ngày
// // //  - hours:        giờ
// // //  - minutes:      phút
// // //  - seconds:      giây
// // //  - milliseconds: mini giây
// // new Date(year, month, day, hours, minutes, seconds, milliseconds);

// var date = new Date(2017,5,19,7,30,20,5);
// document.write(date+"<br>");
// ///////định dạng iso
// var ISO_1 = new Date("2014-11-20");
// document.write(ISO_1+"<br>")
// var ISO_2 = new Date("2014-11");
// document.write(ISO_2+"<br>")
// var ISO_3 = new Date("2014");
// document.write(ISO_3+"<br>")
// ////////////định dạng long
// var LONG_1 = new Date("Mar 25 2015");
// document.write(LONG_1+"<br>")
// var LONG_2 = new Date("2015 Mar 25");
// document.write(LONG_2+"<br>")
// var LONG_3 = new Date("25 2015 Mar");
// document.write(LONG_3+"<br>")
// /////////////định dạng short
// var SHORT_1 = new Date("03-25-2015");
// document.write(SHORT_1+"<br>")
// var SHORT_2 = new Date("03/25/2015");
// document.write(SHORT_2+"<br>")
// var SHORT_3 = new Date("2015/03/25");
// document.write(SHORT_3+"<br>")
// var SHORT_4 = new Date("2015-03-25");
// document.write(SHORT_4+"<br>")

// ////////////////////////////////clock/////////////
// function startTime()
// {
//       // lấy ngày hiện tại
//       var today = new Date();
//       //giờ phút giây hiện tại
//       var h = today.getHours();
//       var m = today.getMinutes();
//       var s = today.getSeconds();

//       //chuyển đổi sang dạng 01, 02, 03
//       m = checkTime(m);
//       s = checkTime(s);

//       //Ghi ra trình duyệt
//       document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;

//       //Dùng hàm setTimeOut để thiết lập gọi lại 0.5 giây 1 lần
//       var t = setTimeout(function()
//       {
//             startTime();
//       },500);  
// }
// function checkTime(i)
// {
//       if(i<10)
//       {
//             i = "0"+i;

//       }
//       return i;
// }

// /////////////////////////////////////////////////////////////////////////////////////////typeOf///////////////////////////////////////////////////
// //dùng để kiểm tra 1 biến nào đó 1 giá trị nào đó có kiểu là gì
// var number = 12;
// var string = "12";
// var object = new Number();
 
// document.write("number: " + typeof number + "<br/>");
// document.write("string: " + typeof string + "<br/>");
// document.write("object: " + typeof object + "<br/>");
/////////////////////////////////////////////////////////////////////////////////////////BOM//////////////////////////////////////////////////////
// var width = window.innerWidth
//         || document.documentElement.clientWidth
//         || document.body.clientWidth;
//  document.write("chiều rộng là: "+ width+"<br>");
// var height = window.innerHeights
//         || document.documentElement.clientHeight
//         || document.body.clientHeight;
// document.write("chiều cao là: "+height+"<br>");
// /////////////////////////window.open() mở của sổ
// var win = null;
// function openWindow()
// {
//       win = window.open("file:///E:/Web/2017-5-15-12.15pm-Fooseshoes/index.html","win","width=500, height=500");
//       return false;
// }
// function closeWindow()
// {
//       win.close()
//       return false;
// }
// ////////////////////window.moveTo() di chuyển cửa sổ
// function moveWindow()
// {
//       win.moveTo(500,1000);
//       win.focus();
//       return false;
// }
// /////////////////resize đưa của sổ về kích thước cũ
// function resizeWindow()
// {
//       win.resizeTo(1000,1000);
//       win.focus();
//       return false;
// }
// /////////////////////////////////////////////////////////////////////////////////////////Location/////////////////////////////////////////////////
// //////////////window.location.reload() tải lại trang
// function reloadpage()
// {
//       window.location.reload();
// }
// /////////////window.location.replace() ghi đè trang
// function replacepage()
// {///ko đưa vào history
//       window.location.replace("file:///E:/Web/2017-5-15-12.15pm-Fooseshoes/index.html");
// }
// function hrefpage()
// {//đưa vào history
//       window.location.href = "file:///E:/Web/2017-5-15-12.15pm-Fooseshoes/index.html";
// }
// /////////////window.location.assign() load trang mới
// function assignpage()
// {
//       window.location.assign("file:///E:/Web/2017-5-15-12.15pm-Fooseshoes/index.html");
// }
// /////////////////////////////////các thuộc tính
//       document.write("hash:" +window.location.hash + "<br/>");
//       document.write("host:" +window.location.host + "<br/>");
//       document.write("hostname:" +window.location.hostname + "<br/>");
//       document.write("href:" +window.location.href + "<br/>");
//       document.write("origin:" +window.location.origin + "<br/>");
//       document.write("pathname:" +window.location.pathname + "<br/>");
//       document.write("port:" +window.location.port + "<br/>");
//       document.write("search:" +window.location.search + "<br/>");
// /////////////////////////////////////////////////////////////////////////////////////////history//////////////////////////////////////////////////
// ////////đếm tổng số trang
// var count = window.history.length;
// document.write(count); 
// ///////////đi đến 1 trang nào đó
// // trở lại trang trước
// window.history.back();
 
// // đi tới trang kế tiếp sau khi sử dụng back()
// window.history.forward()
 
// // đi tới trang cách đây 5 lần lướt web
// window.history.go(-5);
// /////////////////////////////////////////////////////////////////////////////////////////cookie///////////////////////////////////////////////////
// //////////////////////tạo cookie
// document.cookie = "website=bibook.com"
// //////////////////expires thiết lập thời gian sống cho cookie
// document.cookie = "website=bibook.com; expires=Thu, 0 Dec 2017 12:00:00 UTC";
// ///////////////////path thay đổi đường dẫn
// document.cookie = "website=bibook.com; expires=Thu, 0 Dec 2017 12:00:00 UTC; path=/<br>";
// //////////////////lấy giá trị
// var gt = document.cookie;
// /////////////////cookieEnable kiểm tra cookie có được bật
// if(window.cookieEnabled)
// {
//       document.write("bạn đã bật cookie");
// }
// else{
//       document.write("cookie đã bị tắt<br>");
// }
// ////////////////////navigator.appName kiểm tra tên trình duyệt
// document.write("app name: "+window.navigator.appName+"<br>");
// document.write("code name: "+window.navigator.appCodeName+"<br>");
// /////////////////////kiểm tra engine của trình duyệt
// document.write("engine: "+navigator.product+"<br>");
// ///////////////////kiểm tra vesion cuẩ trình duyệt
// document.write("cách 1: "+navigator.appVersion+"<br>");
// document.write("cách 2: "+navigator.userAgent+"<br>");
// /////////////////kiểm tra hệ điều hành
// document.write("hệ điều hành: "+navigator.platform+'<br>');
// ////////////////kiểm tra ngôn ngữ trình duyệt
// document.write("ngôn ngữ: "+navigator.language+"<br>");
// /////////////////////////////////////////////////////////////////////////////////////////Screen///////////////////////////////////////////////////
// /////////////lấy width, height của màn hình
// document.write("width screen: "+screen.width+"<br>");
// document.write("height screen: "+screen.height+"<br>");
// ////////lấy width height ko tính các tools
// document.write("width alvailable: "+screen.alvailableWidth+"<br>");
// document.write("height alvailable: "+screen.alvailableHeight+"<br>");
// //////////lấy color
// document.write("color: "+screen.colorDepth+"<br>");
// //////////////lấy số pixel
// document.write("pixlel: "+screen.pixelDepth);
// /////////////////////////////////////////////////////////////////////////////////////////Object///////////////////////////////////////////////////
// ////////////////////khởi tạo
// var comment = new Object();
// //or
// var comment2 = {};
// ///////////////////thuộc tính
// // Khởi tạo
// var Comment = new Object();
 
// // Thêm thuộc tính
// Comment.title = '';
// Comment.content = '';
// Comment.fullname = '';
// Comment.email = '';
// //////or
// // Khởi tạo
// var Comment = {
//     title : "",
//     content : "",
//     fullname : "",
//     email : ""
// };
// ///or
// // Khởi tạo
// var Comment = {};
 
// // Thêm thuộc tính
// Comment.title = '';
// Comment.content = '';
// Comment.fullname = '';
// Comment.email = '';
// ////////////////phương thức
// // Khởi tạo
// var Comment = new Object();
 
// // Thêm phương thức
// Comment.addComment = function(){
//     // do some thing
// };
 
// Comment.validateComment = function(){
//     // do some thing
// };
// /////////////////gán giá trị
// Comment.title = "Tiêu đề bình luận";
// ////////////////lấy giá trị thuộc tính
// var title = Comment.title;
// ////////////////gọi phương thức
// comment.addComment();
// ////////////////////đối tượng chứa đối tượng
// var Comment = {
//     info : {
//         title : "",
//         content : "",
//         email : "",
//         fullname : ""
//     }
// };

// Comment.info.title = "Comment tại freetuts.net";
// Comment.func.addComment();
// ////////////////////mảng chúa đối tượng
// // Đối tượng Comment
// var Comment = {
//     title   : "",
//     content : "",
//     email   : "",
//     fullname : ""
// };
 
// // Khởi tạo mảng
// var Comments = [];
 
// // Gán giá trị cho phần tử mảng
// Comments[0] = Comment;
 
// // Gọi tới thuộc tính
// Comments[0].title = "Tiêu đề bình luận";
// alert(Comments[0].title);
//////////////////////////thao tác với đối tượng
/*Đề bài: Viết chương trình quản lý sinh viên gồm các thao tác chính như sau:

Xem danh sách sinh viên
Thêm sinh viên
Xóa sinh viên khỏi danh sách
Sửa thông tin sinh viên

Với mỗi sinh viên cần lưu trữ các thông tin sau:

Mã sinh viên
Tên sinh viên
Email*/
// var Student = {
//         data : [],
//         viewStudent : function(){
//             // Lấy danh sách sinh viên
//             var listStudent = this.data;

//             // Lặp và hiển thị sinh viên
//             for(var i = 0; i < listStudent.length; i++){
//                 document.write("<div>" + listStudent[i].id + "|" + listStudent[i].name + "|" + listStudent[i].email + "</div>");
//             }
//         },
//         addStudent : function(id, name, email){
//             // Tạo thông tin sinh viên
//             var item = {
//                 id : id,
//                 name : name,
//                 email : email
//             };

//             //Thêm sinh viên
//             this.data.push(item);
//         },
//         removeStudent : function(id){
//             // Lặp qua sinh viên để tìm kiếm và xóa
//             for(var i = 0; i < this.data.length; i++){
//                 if (this.data[i].id === id) { // nếu là sinh viên cần xóa
//                     this.data.splice(i, 1); // thì xóa
//                 }
//             }
//         },
//         editStudent : function(id, name, email){
//             // Tìm sinh viên cần edit
//             for(var i = 0; i < this.data.length; i++){
//                 // nếu là sinh viên cần edit thì thực hiện edit
//                 if (this.data[i].id === id) { 
//                     this.data[i].name = name;
//                     this.data[i].email = email;
//                 }
//             }
//         }
//     };

//     document.write('<h4>Danh sách sinh viên ban đầu</h4>');
//     Student.viewStudent();

//     document.write('<h4>Danh sách sinh viên sau khi thêm hai sinh viên</h4>');
//     Student.addStudent("sv001", 'Nguyễn Văn Cường', "thehalfheart@gmail.com");
//     Student.addStudent("sv002", 'Vũ Thị Thu Tình', "freetuts.net@gmail.com");
//     Student.viewStudent();

//     document.write('<h4>Danh sách sinh viên sau khi xóa một sinh viên</h4>');
//     Student.removeStudent('sv001');
//     Student.viewStudent();

//     document.write('<h4>Danh sách sinh viên sau khi sửa thông tin</h4>');
//     Student.editStudent('sv002', "Tên Sinh Viên Mới", "mrcuong.winter@gmail.com");
//     Student.viewStudent();
// /////////////////////////////////////////////////////////////////////////////////////////protypes/////////////////////////////////////////////////
// ////////////////tạo mưới đối tượng
// // Tạo mới đối tượng Number
// var age = new Number(12);
 
// // Lúc này sẽ sử dụng được các phương thức
// age.toString();
// age.toFixed();
// age.toPrecision();
// age.valueOf();
// ////////////bổ xung dữ liệu
// // Tạo đối tượng
// Number.prototype.plus = function(value){
// return this.valueOf() + parseInt(value);
// };
 
// // Tạo mới đối tượng
// var age = Number(12);
// document.write(age.plus(12) + "<br/>");
 
// // Tạo đối tượng khác
// var year = 2014;
// document.write(year.plus(12));
// /////////////tạo đối tượng thao tác với protype
// var Person = {};
 
// // Sai, không hoạt động
// var p = new Person();

// function Person(){
     
//     // Thuộc tính
//     this.name = "";
//     this.email = "";
//     this.address = "";
     
//     // Phương thức
//     this.showInfo = function(){
//         documenet.write("Tên là: " + this.name + "<br/>");
//         documenet.write("Email là: " + this.email + "<br/>");
//         documenet.write("Địa chỉ là: " + this.address + "<br/>");
//     };
// }
// // Tạo mới
// var cuong = new Person();
 
// // Gán thuộc tính
// cuong.name = "Nguyễn Văn Cường";
// cuong.email = "thehalfheart@gmail.com";
// cuong.address = "Buôn Ma Thuột ĐăkLăk";
 
// // Gọi phương thức
// cuong.showInfo();
// ///////////////////thêm thuộc tính và phương thức
// // Tạo đối tượng
// function Person(){
     
//     // Thuộc tính
//     // ...
     
//     // Phương thức
//     // ...
// }
 
// // Bổ sung thông tin
// Person.prototype.gender = "";
// Person.prototype.showGender = function(){
//   document.write(this.gender);  
// };
 
 
// // Sử dụng
// var cuong = new Person();
// cuong.gender = "Nam";
// cuong.showGender();
/////////////////////////////////////////////////////////////////try catch////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////xử lý lỗi///////////////////////////////////////
// try {
//     // Quăng lỗi ra
//     throw("Noi dung loi");  
// } catch (e){
//     // Đón nhận lỗi và in ra
//     // Vị trí này chỉ chạy khi ở try có quăng lỗi hoặc ở try 
//     // sử dụng sai cú pháp ...
//     console.log(e.message);
// } finally{
//     // Cuối cùng chạy cái này
//     // Luôn luôn chạy sau cùng
//     console.log('End of try cache');
// }
/////////////////
// try {
//     // Sử dụng biến message chưa được định nghĩa
//     console.log(message);  
// } catch (e){
//     console.log(e.message);
// }
//////////////////////////
// try {
//     fadsfas
//     fasdfas
//     fsda
// } catch (e){
//     console.log(e.message);
// } finally{
//     console.log('End');
// }
//////////////////////
// var domain = 'qa.freetuts.net'
 
// try {
//     if (domain !== 'freetuts.net'){
//         throw new Error('Domain nay khong phai la trang chu');
//     }
// } catch (e){
//     console.log(e.message);
// } finally{
//     console.log('End');
// }
////////////////
// function UserError(){
     
//     this.throwLogin = function(){
//         throw new Error('Invalid username and password');
//     };
     
//     this.throwSession = function(){
//         throw new Error('Your request is timeout');
//     };
     
//     return this;
// }
/////////////////////////////////////////////////////////////////////////////this/////////////////////////////////////////////////////////////////
// function Student(){
//       this.name = '';
//       this.age = '';
//       console.log(this);
//       this.showInfo = function(){  
//             console.log(this);
//       };
// }
// //khoi tao doi tuong
// var Student = new Student();
// //gan gia tri
// Student.name = 'Nguyen Van Binh';
// Student.age = '19';
// //hien thi thong tin
// Student.showInfo();
////////////////////
// function showMessage(obj)
// {
//       console.log(obj);
//       console.log(obj.value);
// }
//w3schools////w3schools////w3schools////w3schools////w3schools////w3schools////w3schools////w3schools////w3schools////w3schools//
//////////////////////////time
function time() {
      document.getElementById("time").innerHTML = Date();
      //toUTCString () chuyển đổi một ngày thành chuỗi UTC
}
///////////////////////thay đổi nội dung
function noiDung() {
      document.getElementById("demo").innerHTML = "hello javascript";
}
//////////////////////thay đổi html(css)
function change() {
      document.getElementById("mode").style.fontSize = "30px";
}
//////////////////ẩn hiện phần tử
function hide() {
      document.getElementById("one").style.display = 'none';
}
function show() {
      document.getElementById("one").style.display = 'block';
}
/////////////thư mục js
function myFunction() {
   document.getElementById("second").innerHTML = "đã thay đổi";
}
/////////////////////document.write
document.write(5+6);
////////////////////alert
//alert(5+5);
///////////////////console.log
console.log("you see me");
//////////////////cú pháp  
var x,y,z
x=5;
y=10;
z=x--+y++;
document.write("x="+x+" and y="+y+" and z="+z)
////////////////////////biến
var x = 3;
var y = 7;
var tong = x+y;
document.write('<br>tổng là: '+tong);
/////////////////////đối tượng
var person = {
      firstName : 'john',
      lastName : 'smith',
      age : '20',   
      eyeColor : 'blue'
}
////////////////////vị trí đầu chuỗi
var count = "hello, how are you, how"
var pos = count.indexOf('how');
////////////////////vị trí cuối chuỗi
var coun = "hello, how are you, how"
var pis = coun.lastIndexOf('how');
///////////////////tìm kiếm chuỗi
var count = "hello, how are you, how"
var pos = count.search('how');
///////////////lấy 1 phần trong chuỗi
var lice = "apple, banana, kiwi"
var slice = lice.slice(7,13);//tương tự như substring, substr
/////////////////////thay nội dung chuỗi
function came() {
      var str = document.getElementById("chame").innerHTML;
      var tyt = str.replace(/you/g,"binh");//thay toàn cục(/you/g,"binh") phân biệt hoa và thường /YOU/i để hoạt động
      document.getElementById("chame").innerHTML = tyt; 
}
///////////////////in hoa
function uppercase() {
      var text = document.getElementById("shower").innerHTML;
      document.getElementById("shower").innerHTML = text.toUpperCase();//toLowerCase() in thường
}
////////////////////kết hợp chuỗi
var text1 = 'hello'; 
var text2 = 'hi';
var text3 = text1.concat(" ",text2);
/////////////////////////trích suất ký tự chuỗi
var emt = "hello world"//charCodeAt() trả về ký tự unicode
/////////////////tách chuỗi
var vtc = 'hello';
var arr = vtc.split("");
var texxt = "";
var i;
for (i = 0; i < arr.length; i++) {
      texxt += arr[i] + '<br>'
}
////////////////////trả 1 số về 1 chuỗi
var x = 123;
////toExponential làm tròn số /toFixed làm tròn số thập phân
/////valueOf trả về 1 số như 1 số
///////////toán=math
var d = Math.round(4.7);//làm tròn/math.pow(8,2) 2 lần 8= 64/sqrt căn bậc hai
//abs trị tuyệt đối//random ngẫu nhiên
/////////////////////////hoạt ảnh














/**
 * bai 1:
 * input: 6 --> dau
 * input: 4 --> rot
 */

// function average(){
//     let numAverage = Number(prompt('nhap dtb: '));
//     handlePoint(numAverage);
// }

// function handlePoint(point){
//     if(point >= 5) console.log('Dau');
//     else console.log('rot');
// }
// average()

/**
 * 
 * bai 2: so quyen luc
 * Cho phép nhập vào một số nguyên dương x có 3 chữ số. 
 * Hãy cho biết x có phải là “số quyền lực” không? Biết “số quyền lực” là số có chữ số hàng trăm là chữ số 9.
 * input   output
 * 379      yes
 * 498      no
 */


// function typeNum(){
//     let num = Number(prompt('nhap so nguyen duong: '));
//     if(num > 0){
//         if(Math.floor(num%10 == 9)) console.log('yes');
//         else console.log('no');
//     } else{
//         console.log('khong phai so nguyen duong, vui long nhap lai! ');
//     }
// }

// typeNum();


/**
 * 
 * bai 03: Tam giác cân

Cho 3 cạnh của một tam giác. Hãy kiểm tra tam giác này có phải tam giác cân hay không?

Quy ước: Yes/No
 * 
 */

// function isoscelesTriangle(){
//     let a = Number(prompt('nhap do dai canh a: '));
//     let b = Number(prompt('nhap do dai canh b: '));
//     let c = Number(prompt('nhap do dai canh c: '));

//     isIsoscelesTriangle(a,b,c);
// }

// function isIsoscelesTriangle(a,b,c){
//     if(a==b || b==c || c==a){
//         console.log('yes');
//     } else console.log('no');
// }

// isoscelesTriangle();

/**
 * 
 * bai 4: tinh tien dien
 */

// function consumption(){
//     let kw = Number(prompt('nhap vao so kw: '));
//     calculate(kw);
// }

// function calculate(kw){
//     if(kw<100) console.log('tien phai tra: '+ kw*2000);
//     else if(kw<200) console.log('tien phai tra: '+ kw*2500);
//     else console.log('tien phai tra: '+ kw*2500);
// }
// consumption();

/**
 * 
 * bai 5: Loại ký tự

Cho phép người dùng nhập vào một ký tự. Hãy cho biết ký tự đó là ký tự hoa, ký tự thường, ký tự số hay ký tự đặc biệt. Biết rằng:

- Ký tự hoa gồm: ‘A’, ‘B’,… ‘Z’
- Ký tự thường gồm: ‘a’, ‘b’, …, ‘z’
- Ký tự số gồm: ‘0’, ‘1’, …, ‘9’
- Các ký tự còn lại gọi là ký tự đặc biệt.

Quy ước: Hoa/Thuong/So/DB
 */

// let num = prompt('nhap vao: ');
// if(num >= '1' && num <= '9') console.log('so');
// else if(num >= 'a' && num <= 'z') console.log('thuong');
// else if(num >= 'A' && num <= 'Z') console.log('Hoa');
// else console.log('DB');


/**
 * 
 * bai 6: ## Phương trình bậc nhất

Giải phương trình bậc nhất: ax + b = 0. Trong đó a, b được nhập từ bàn phím:

Quy ước:

- Nếu phương trình có 1 nghiệm, thì in ra nghiệm của phương trình.
- Nếu phương trình vô nghiệm, thì in ra là “VN”.
- Nếu phương trình vô số nghiệm, thì in ra là “VSN”.
 */

// function nhapHangSo(){
//     let a = Number(prompt('nhap a: '));
//     let b = Number(prompt('nhap b: '));
//     hangBacNhat(a,b);
// }
// function hangBacNhat(a, b){
//     if(a == 0){
//         if(b == 0){
//             console.log('ptrinh vo so nghiem');
//         } else {
//             console.log('ptrinh vo nghiem');
//         }
//     } else {
//         console.log('ptrinh co 1 nghiem duy nhat: x = '+ -b/a);
//     }
// }
// nhapHangSo();



/**
 * bai 7: pt bac 2
 */

//  function nhapHangSo() {
//     let a = Number(prompt("nhap a: "));
//     let b = Number(prompt("nhap b: "));
//     let c = Number(prompt("nhap c: "));
//     hamBacHai(a, b, c);
//   }
  
//   function hamBacHai(a, b, c) {

//     if(a != 0){
//     let denta = (b*b - 4*a*c);
//     console.log(denta)
//     if (denta > 0) {
//       let x1 = -b + (Math.sqrt(denta) / 2* a);
//       let x2 = -b - (Math.sqrt(denta) / 2* a);
//       console.log(`ptrinh co 2 nghiem: x1 = ${x1}, x2 = ${x2}`);
//     } else if (denta == 0) {
//       let x = (-b / 2) * a;
//       console.log(`ptrinh co nghiem kep: ${x}`);
//     } else {
//       console.log("ptrinh vo nghiem");
//     }
//   }
//   else {
//     console.log('day la phuong trinh bac nhat, vui long nhap lai')
//   }
// }
//   nhapHangSo();

/**
 * bai 8: chuyen doi so thanh chu
 */

// function convertNumToChar(){
//     let arr = ['khong', 'mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin']
//     let num = Number(prompt('nhap so co 2 chu so: '));
    
//     let chuc = Math.floor(num/10);
//     let dvi = Math.floor(num%10);

//     console.log(`${arr[chuc]} muoi ${arr[dvi]}`);
// }
// convertNumToChar();

/**
 * bai 9: Ngày tháng năm hợp lệ
 */


function validDate(){
    let day = Number(prompt('nhap ngay: '));
    let month = Number(prompt('nhap thang: '));
    let year = Number(prompt('nhap nam: '));

    isValid(day, month, year);
    
}
function monthHave31d(m){
   let condition = m == 1 || m==3 || m==5|| m==7 || m==8 || m==10 || m==12;
   return condition;
}
function leapYear(y){
    return y%4 == 0 && y%100!=0
}
function isValid(d,m,y){
    if(monthHave31d(m)){
        if(d <= 31) console.log('valid');
        else console.log('invalid')
    }
    else if(m == 2){
        if(leapYear(y)) {
            if(d <= 29) console.log('valid');
            else console.log('invalid');
        } else{
            if(d <= 28) console.log('valid');
            else console.log('invalid');
        }
    } 
    else {
        if(d<=30) console.log('valid');
        else console.log('invalid');
    }
}
validDate();

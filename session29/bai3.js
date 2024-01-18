
let myString = "Chuỗi bất kỳ để đếm số ký tự.";
function demSoKyTu(chuoi) {

    return chuoi.replace(/\s/g, '').length;
}
let ketQua = demSoKyTu(myString);

console.log("Số ký tự trong chuỗi là: " + ketQua);

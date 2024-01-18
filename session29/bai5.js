function locChuoiTrongMang(mang, chuoi) {
    let ketQua = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].includes(chuoi)) {
            ketQua.push(mang[i]);
        }
    }
    return ketQua;
}
let mangChuoi = ["Mot bua com", "An thi bo", "qua tao", "qua chuoi dai", "ban quan ao"];
let chuoiNhap = prompt("Nhập vào một chuỗi:");
let ketQuaLoc = locChuoiTrongMang(mangChuoi, chuoiNhap);
console.log("Các phần tử trong mảng chứa chuỗi '" + chuoiNhap + "':");
console.log(ketQuaLoc);

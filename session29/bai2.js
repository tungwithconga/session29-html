function timPhanTuCoDoDaiLonNhat(mang) {
    if (mang.length === 0) {
        return null; 
    }

    let phanTuLonNhat = mang[0]; 

    for (let i = 1; i < mang.length; i++) {
        if (mang[i].length > phanTuLonNhat.length) {
            phanTuLonNhat = mang[i];
        }
    }

    return phanTuLonNhat;
}

const mang = ["apple", "banana", "kiwi", "orange", "strawberry"];
const phanTuLonNhat = timPhanTuCoDoDaiLonNhat(mang);

if (phanTuLonNhat !== null) {
    console.log("Phần tử có độ dài lớn nhất trong mảng là:", phanTuLonNhat);
} else {
    console.log("Mảng rỗng, không có phần tử để kiểm tra.");
}

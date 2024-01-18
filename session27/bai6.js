const mang = [7, 2, 5, 1, 8, 3, 9, 4, 6];
function sapXepNgauNhien(arr) {
    const doDai = arr.length;
    for (let i = 0; i < doDai; i++) {
        const viTriNgauNhien = Math.floor(Math.random() * doDai);
        const temp = arr[i];
        arr[i] = arr[viTriNgauNhien];
        arr[viTriNgauNhien] = temp;
    }

    return arr;
}

const mangDaSapXep = sapXepNgauNhien([...mang]);

console.log("Mảng đã sắp xếp theo thứ tự ngẫu nhiên:", mangDaSapXep);

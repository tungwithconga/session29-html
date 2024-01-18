function kiemTraChanLe(so) {
    if (so % 2 === 0) {
        return "Số chẵn";
    } else {
        return "Số lẻ";
    }
}
const so1 = 4;
const so2 = 5;
const so3 = 6;
console.log(`Số ${so1} là: ${kiemTraChanLe(so1)}`);
console.log(`Số ${so2} là: ${kiemTraChanLe(so2)}`);
console.log(`Số ${so3} là: ${kiemTraChanLe(so3)}`);

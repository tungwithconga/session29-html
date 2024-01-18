let array = [1,2,3,4,5,6,7,8,9];
let maxNumber = array[0];
let minNumber = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
        maxNumber = array[i];
    }
    if (array[i] < minNumber) {
        minNumber = array[i];
    }
}
console.log(array);
console.log("So lon nhat la:",maxNumber);
console.log("So nho nhat la:",minNumber);
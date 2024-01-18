let array = [1,2,3,4,5,6,7,8,9];
console.log("Mang co cac gia tri sau:",array);
for (let i = array.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
        array.splice(i, 1);
    }
} 
console.log("Mang sau khi loai bo gia tri le:",array);

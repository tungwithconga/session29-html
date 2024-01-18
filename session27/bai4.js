let array=[1,2,3,4,5,6,7,8,9,10,11];
console.log("Mang luc dau:",array);
let mangChan=[];
let mangLe=[];
for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
       mangLe.push(array[i]); 
    } else {
       mangChan.push(array[i]);
    }
}
console.log("Cac so chan la:",mangChan);
console.log("Cac so le la:",mangLe);
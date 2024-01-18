let a=prompt("Hay nhap vao so nguyen a");
let b=prompt("Hay nhap vao so nguyen b");
let arr=[];
if (a<b){
    for(let i=a;i<b;i++){
        arr.push(i);
    }
}else if (a>b){
    for(let i=b;i<a;i++){
        arr.push(i);
    }
}
console.log(arr);

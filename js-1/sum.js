function suma(x){
    if(x === 1){
        return 1;
    } else{
        return x + suma(x-1);
    }
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120
function max(arr){
    let mayor = 0;
    if (arr.length === 0) {
        return "undefined";
    }else{
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] > mayor) {
                    mayor = arr[index];
            }     
        }
    return mayor;
    }
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
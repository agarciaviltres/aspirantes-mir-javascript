function maxIndex(arr){
    let mayor = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > mayor) {
                mayor = arr[index];
        }     
    }
    return arr.indexOf(mayor);
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
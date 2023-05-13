function join(arr){
    //for (let index = 0; index < arr.length; index++) {
        return arr.toString().replace(/,|^[H]/g, " ")
    //}
}

console.log(join([1,"Hello",5,"Pedro"]));
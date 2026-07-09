function evenorodd(num){
    //modulus used for the remainder is 0 for the evennumber
    if (num % 2 == 0){
        return "Even";
    }else {
        return "odd";
    }
}
console.log(evenorodd(12));
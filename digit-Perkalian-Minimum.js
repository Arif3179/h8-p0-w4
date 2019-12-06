function digitPerkalianMinimum(angka) {
    var a = angka;
    var faktor= []
    for (i=1;i<angka;i++){
        if(angka%i == 0){
            faktor.push(`${i}${angka/i}`)
        }
    } 
    panjang =[]
    for(j=0;j<faktor.length;j++){
        panjang.push(faktor[j].length);
    } sortedPanjang = panjang.sort(function(a,b){return a-b})
    return sortedPanjang[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
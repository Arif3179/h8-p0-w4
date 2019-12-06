function fpb(angka1, angka2){
    if(angka1 > angka2){
        var a = angka1;
        var b = angka2;
    } else {var a = angka2;
    var b = angka1;
    }
    var c = a%b;
    if(b%c == 0){
        var hasil = c;
    } else {
        var d = b%c;
        if(c%d == 0){
            var hasil = d;
        } else hasil = 1;

    }
    return hasil;
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(1001, 1009)); // 1
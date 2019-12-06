function ubahHuruf(kata){
    tempHasil= [];
    temp2 = [];
    temp3 = [];
for(i=0;i<kata.length;i++){
    tempHasil.push(kata.charCodeAt(i))
} for(j=0;j<tempHasil.length;j++){
    temp2.push(tempHasil[j]+1);
} for(k=0;k<temp2.length;k++){
    temp3.push(String.fromCharCode(temp2[k]));
} return temp3.join("");
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

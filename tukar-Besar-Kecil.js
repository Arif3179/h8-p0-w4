function tukarBesarKecil(kalimat) {
    tempArray = [];
    for(i=0;i<kalimat.length;i++){
        tempArray.push(kalimat.charCodeAt(i))
    } newTempArr = []; 
    for (j=0;j<tempArray.length;j++){
        if(tempArray[j] < 123 && tempArray[j] > 96){
            newTempArr.push(String.fromCharCode(tempArray[j]-32));
        } else if(tempArray[j] < 91 && tempArray[j] > 64 ) {
            newTempArr.push(String.fromCharCode(tempArray[j]+32));
        } else { 
            newTempArr.push(String.fromCharCode(tempArray[j]))
        }
} return newTempArr.join("");
}
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
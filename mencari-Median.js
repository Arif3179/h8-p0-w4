function cariMedian(arr) {
    panjangArr = arr.length
    if(panjangArr%2 != 0 ){
        medianIdx = Math.ceil(panjangArr/2) -1
        hasil = arr[medianIdx];
    } else {
        medianIdx = panjangArr/2 -1;
        hasil = (arr[medianIdx] + arr[medianIdx+1])/ 2 
    }
    return hasil;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
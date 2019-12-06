function changeMe(arr) {
    var hasilObject = {};
    for(i=0;i<arr.length;i++){
        hasilObject.firstName = arr[i][0]
        hasilObject.lastName = arr[i][1]
        hasilObject.gender = arr[i][2]
        hasilObject.age = arr[i][3] <= 2019 && arr[i][3] != "undefined" ? 2019 - arr[i][3] : "Invalid Birth Year"
        console.log(hasilObject)
    }
    return "\n";
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
//changeMe([]); // ""
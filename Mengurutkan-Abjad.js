function urutkanAbjad(str) {
    var tempArray = [];
    for(i=0;i<str.length;i++){
        tempArray.push(str[i]);
    } return tempArray.sort().join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
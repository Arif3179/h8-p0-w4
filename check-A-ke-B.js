function checkAB(num) {
tempArray = []
    for(i=0;i<num.length;i++){
        tempArray.push(num[i]);
}   
if(tempArray.indexOf("a") == -1 || tempArray.indexOf("b") == -1){
    return false;
} 
var arrA=0; 
var arrB=0;
for(i=0;i<tempArray.length;i++){
    if(tempArray[i] == "a"){
        arrA=i;
    } else if(tempArray[i]== "b"){
        arrB =i ;
    } if(arrA !=0 && arrB !=0){
        hitung = Math.abs(arrA - arrB)
        if(hitung == 4){
            return true
        }
    }
        
    } return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
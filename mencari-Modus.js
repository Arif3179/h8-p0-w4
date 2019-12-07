function cariModus(arr) {
  let output = []
  for(i=0;i<arr.length;i++){
    let unik = true
    for(j=0;j<output.length;j++){
      if(arr[i]== output[j][0]){
        output[j][1]++
        unik = false
      }
    } if(unik){
      output.push([arr[i],1])
    }
  } 
  if(output.length ==1 || output.length == arr.length){
    return -1;
  } 
  let pembanding = 0
  for(k=0;k<output.length;k++){
   if(output[k][1] > pembanding){
     pembanding = output[k][1]
     hasilFinal = output[k][0]
   }
   } return hasilFinal
  }

  // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
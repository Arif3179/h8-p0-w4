function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  hasilOutput = [];
  jarak = 0
  if(arrPenumpang.length == 0){
      return hasilOutput
  }

  for(i=0; i<arrPenumpang.length; i++){
      tempObject = {};
      jarak = rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])
      tempObject.penumpang = arrPenumpang[i][0]
      tempObject.naikDari = arrPenumpang[i][1]
      tempObject.tujuan = arrPenumpang[i][2]
      tempObject.bayar = jarak * 2000
      hasilOutput.push(tempObject)

  }
  return hasilOutput
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));

//TEST CASE
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
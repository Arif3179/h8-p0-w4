
function checkCoordinate (board) {
  hasilTotal = []
  hasilX = [];
  hasilZ = [];
  hasilY = [];
  for (i=1;i<board.length;i++){
    for(j=1;j<board[i].length;j++){
      if(board[i][j] === "x"){
        angkaPertama = board[0][j]
        hasilX.push(`${angkaPertama}${i}`);
      } else if(board [i][j] === "y"){
        angkaPertama = board[0][j]
        hasilY.push(`${angkaPertama}${i}`)
      } else if(board [i][j] === "z"){
        angkaPertama=board[0][j]
        hasilZ.push(`${angkaPertama}${i}`)
      }

  }

}
  hasilTotal.push(hasilX)
  hasilTotal.push(hasilY)
  hasilTotal.push(hasilZ)
  return hasilTotal
}

var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", "z", "x", "y"],
  ["3", "x", " ", " "],
]
console.log(checkCoordinate(array))
// [["B1", "B2", "A3"], ["C2"], ["A2"]]

var array1 = [
  [" ", "A", "B", "C", "D"],
  ["1", "x", " ", "z", "x"],
  ["2", " ", "x", " ", " "],
  ["3", "y", " ", " ", " "],
  ["4", " ", "z", " ", "z"],
]
console.log(checkCoordinate(array1))
//// [ [ 'A1', 'D1', 'B2' ], [ 'C1', 'B4', 'D4' ], [ 'A3' ] ]
//
var array2 = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", " ", "x", "y"],
  ["3", "x", " ", " "],
]
console.log(checkCoordinate(array2))
//// [ [ 'B1', 'B2', 'A3' ], [], [ 'C2' ] ]
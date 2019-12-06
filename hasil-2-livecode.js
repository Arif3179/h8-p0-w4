/**
 * ================
 * Pair Programming
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah funtion pair untuk mengembalikan sebuah array of names, dimana names tersebut
 * adalah pasangan dari 2 nama yang digabung ke dalam 1 string, jika ada yang tidak mendapatkan
 * pasangan maka orang tersebut dianggap sendirian.
 * 
 * Example
 * -------
 * @input = 'vindo,marcel,isni,ajeng,kevin'
 * proses:
 * vindo dipasangkan dengan marcel -> 'vindo dan marcel'
 * isni dipasangkan dengan ajeng -> 'isni dan ajeng'
 * kevin tidak punya pasangan -> 'kevin sendirian'
 * 
 * maka @output = [
 *  'vindo dan marcel',
 *  'isni dan ajeng',
 *  'kevin sendirian'
 * ]
 * 
 * Rules
 * -----
 * 1. Tidak boleh menggunakan built-in function: split, slice, splice, join
 */

function pair(str) {
  var sampleInput = str
  var stringArray = [''];
  var j = 0;

  for (var i = 0; i < sampleInput.length; i++) {
        if (sampleInput.charAt(i) == ",") {
            j++;
            stringArray.push('');
        } else {
            stringArray[j] = stringArray[j] + sampleInput.charAt(i);
        }
    }
  var arrStr = stringArray  
  hasil =[];
  if(str.length == 0){
    return "No Pair";
  }
  if (arrStr.length %2 == 0){
    for(i=0;i<=arrStr.length-2;i=i+2){
      hasil.push(arrStr[i]+" dan "+arrStr[i+1]);
    } } else if(arrStr.length %2 > 0) {
      for (i=0;i<=arrStr.length-1;i=i+2){
      if(i != arrStr.length-1) {
        hasil.push(arrStr[i]+" dan "+arrStr[i+1]);
      } else hasil.push(arrStr[i]+" sendirian ");
    }
    }return hasil;
  }

console.log(pair('yusuf,tony,adiel'))
// [ 'yusuf dan tony', 'adiel sendirian' ]

console.log(pair('fajrin,sahata,onesinus,jetly'))
// [ 'fajrin dan sahata', 'onesinus dan jetly' ]

console.log(pair('refqi,fahmi,sinung,arif,gusti'))
// [ 'refqi dan fahmi', 'sinung dan arif', 'gusti sendirian' ]

console.log(pair(''))
// No pair
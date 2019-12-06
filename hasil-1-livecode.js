/**
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 * 
 * 
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*', 
 * 
 * contoh : 
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 * 
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 * 
 * RULES: 
 *  1. Wajib  pseudocode
 *  menggunakan
 */

/* pseudocode 


SET phoneNumber
DETERMINE phoneNumber
IF phoneNumber >= 10 SPLIT phoneNumber
  ELSE DISPLAY "invalid phone number"
LOOP phoneNumber 
    IF phoneNumber.length - 6 == TRUE
    DISPLAY phoneNumber index as *
    ELSE DISPLAY phoneNumber index as index

JOIN phoneNumber
REVERSE phoneNumber
DETERMINE outputPhoneNumber as phoneNmber
*/

function secretPhoneNumber (numbers) {
  outputPhoneNumber = [];
  if(numbers.length >= 10) {
    var phoneNumber = numbers;
  } else return "invalid phone number";
 for(i=0;i<phoneNumber.length-1;i++){
  if(i <= phoneNumber.length - 6){
    outputPhoneNumber.push(phoneNumber[i]);
  } else outputPhoneNumber.push('*');
} return outputPhoneNumber.join("");
}
console.log(secretPhoneNumber("081267465370"))
// 0812674*****
console.log(secretPhoneNumber("08537582711"))
// 085375*****
console.log(secretPhoneNumber("085758271523"))
// 0857582*****
console.log(secretPhoneNumber("0811739915"))
// 08117*****
console.log(secretPhoneNumber("08238797"))
// "Invalid phone number"
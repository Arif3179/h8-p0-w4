function shoppingTime(memberId, money) {
  if(money < 50000){
    return "Mohon maaf, uang tidak cukup"
  }
  if(!memberId){
    return "Mohon maaf, toko X hanya berlaku untuk member saja"
  }
  var hasilObject = {}
  var belanja = []
  var uangKembali = 0
  hasilObject.money = money
  if(money>=1500000){
     belanja.push("Sepatu Stacattu");
     money = money - 1500000;  
     }
  if(money >= 500000 ){
     belanja.push("baju Zoro")
     money = money - 500000
     }
  if(money>= 250000){
     belanja.push("baju H&N")
     money = money - 250000
     } 
  if(money>=175000){
     belanja.push("Sweater Uniklooh");
     money = money - 175000
     } 
  if(money >= 50000){
     belanja.push("casing handphone")
     uangKembali = money - 50000
   } else {
     money = uangKembali;
   }
hasilObject.memberId = memberId
hasilObject.listpurchased = belanja
hasilObject.changeMoney = uangKembali
return hasilObject;
}

    
  
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
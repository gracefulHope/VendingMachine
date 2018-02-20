let vendingMachineFun = {};

let vendingMach = [];
//VendingMach is an array full of objects (item: price)

let totalMoney = 0;
let coinReturn = 'empty';

vendingMachineFun.addFood = function(itemName, price){
  let newFood = {[itemName]: price};
  vendingMach.push(newFood});
  console.log(`${itemName} has been added to the vending machine.`)
  return vendingMach;
}

vendingMachineFun.addCoin = function(coin){
  totalMoney = totalMoney + parseInt(coin)
  return totalMoney;
  console.log(`Your total is now ${totalMoney}`)
}

module.exports = vendingMachineFun;

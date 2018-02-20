let vendingMachineFun = {};

//vendingMach is array full of objects {food: price}
let vendingMach = [];

//totalMoney is amount of money currently put into the vending machine
let totalMoney = 0;

//coinReturn is the amount of money being returned to the customer
let coinReturn = 0;

vendingMachineFun.setVendingMach = function(array){
  vendingMach = array;
}

vendingMachineFun.getVendingMach = function(){
  return vendingMach;
}

vendingMachineFun.setTotalMoney = function(amount){
  totalMoney = amount;
  return totalMoney;
}

vendingMachineFun.getTotalMoney = function(){
  return totalMoney;
}

vendingMachineFun.setCoinReturn = function(amount) {
  coinReturn = amount;
  return coinReturn;
}

vendingMachineFun.getCoinReturn = function() {
  return coinReturn;
}

vendingMachineFun.addFood = function(itemName, price){
  let newFood = {[itemName]: price};
  vendingMach.push(newFood);
  console.log(`${itemName} has been added to the vending machine.`);
  return vendingMach;
}

vendingMachineFun.insertCoin = function(coin){
  let newCoin = parseInt(coin);
  if (newCoin === 5 || newCoin === 10 || newCoin === 25){
    totalMoney = totalMoney + parseInt(coin);
  } else {
    coinReturn = coinReturn + newCoin;
    console.log(`Coin not accepted. Please insert a valid coin (5, 10, 25).`)
  }
  console.log(`Your total is now ${totalMoney}`);
  return totalMoney;
}

module.exports = vendingMachineFun;

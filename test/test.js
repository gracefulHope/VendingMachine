let vendingMachineFun = require('../index.js');
let assert = require('assert');

let vending = [];
let totalMoney = 0;
let coinReturn = 0;
let display = 'INSERT COIN';

describe ('Math', function() {
  it('should test that 3 x 3 = 9', function(){
	assert.equal(9, 3*3);
  })

  it('should test if -8 is results of equation', function(){
  	assert.equal(-8, (3-4)*8);
  })
})

describe ('Vending Machine', function () {
  describe ('Accepts Coins', function () {
    it('should accept a nickel', function(){
	vendingMachineFun.setTotalMoney(0);
	assert.equal(vendingMachineFun.insertCoin('5'), 5);
  
    })
    it('should accept a dime', function (){
	vendingMachineFun.setTotalMoney(0);
	assert.equal(vendingMachineFun.insertCoin('10'), 10);
    })
    it('should accept a quarter', function (){
    	vendingMachineFun.setTotalMoney(0);
	assert.equal(vendingMachineFun.insertCoin('25'), 25);
    	assert.equal(vendingMachineFun.getDisplay(), "TOTAL: 25");
    })
    it('should reject a penny', function (){
	vendingMachineFun.setTotalMoney(0);
	assert.equal(vendingMachineFun.insertCoin('1'), 0);
    })
    it('should reject a dollar coin', function(){
	vendingMachineFun.setTotalMoney(0);
	assert.equal(vendingMachineFun.insertCoin('100'), 0);
    }) 
    it('should be able to add up lots of inserted coins', function(){
    	vendingMachineFun.setTotalMoney(0);
        vendingMachineFun.insertCoin('5');
        vendingMachineFun.insertCoin('5');
        vendingMachineFun.insertCoin('25');
	vendingMachineFun.insertCoin('10');
	assert.equal(vendingMachineFun.getTotalMoney(), 45);
    })
    it('should be able to accurately add up coins and reject bad coins', function(){
	vendingMachineFun.setTotalMoney(0);
	vendingMachineFun.insertCoin('5');
	vendingMachineFun.insertCoin('1');
	vendingMachineFun.insertCoin('25');
	vendingMachineFun.insertCoin('100');
	vendingMachineFun.insertCoin('25');
	assert.equal(vendingMachineFun.getTotalMoney(), 55);
    })

  })

  describe('Select Product', function (){
    //it('should dispense a cola when at least $1.00 is available', function(){})
    //it('should dispense chips when at least $.50 is available', function(){})
    //it('should dispense candy when at least $.65 is available', function(){})
    //it('should not dispense cola if only $.50 is available', function(){})
    //it('should not dispense chips if only $.25 is available', function(){})
    //it('should not dispense candy if only $.45 is available', function(){})
  })


})

var assert = require('assert');

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
	assert(insertCoin('nickel').equal(true));
  
    })
    it('should accept a dime', function (){
	assert(insertCoin('dime').equal(true));
    })
  //it('should accept a quarter', function (){})
  //it('should reject a penny', function (){})
  //it('should reject a Canadian coin', function(){}) 
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

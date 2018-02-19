var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe ('Math', function() {
  it('should test that 3 x 3 = 9', function(){
	assert.equal(9, 3*3);
  })

  it('should test if -8 is results of equation', function(){
  	assert.equal(-8, (3-4)*8);
  })
})

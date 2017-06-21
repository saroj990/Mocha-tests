var assert =  require('chai').assert;
var calc = require('../app/caclulator');

describe("Usage of chai", function(){
    it("Sum of two number is also a number",function(){
        let resSum = calc.sum(2,3);
        assert.typeOf(resSum, 'number', "Result of calculation should be a number");
    });

    it("Test an assertion to be truthy", function(){
      assert('foo' == 'foo',"Foo is not bar");
    });

    it("Two variables pointing to same value are same", function(){
      let val1 = 20;
      let val2 = 20;


      assert(val1 == val2, "Both variables are not some");
    });

    it("Assert equal doesn't check for strict equality",function(){
        assert.equal(1, '1', "Strict equality doesn't checked")
    });

    it("Two variables are not equal", function(){
      assert.notEqual(3, 4, "Not equal");
    });

    it("Strict equality", function(){
      assert.strictEqual(true, true, "Strict equality fails");
    });

    it("Strict in-equality", function(){
      assert.notStrictEqual(2, '2');
    });

    it("Deep equality", function(){
      assert.deepEqual({a: 1}, {a: 1});
    });

    it("5 is greater than 3", function(){
      assert.isAbove(5, 2, '5 is strictly greater than 2');
    });

    it("IsAtleast", function(){
        assert.isAtLeast(5, 5, "Number is not greater than equal to another");
    });

    it("IsBelow", function(){
        assert.isBelow(5,6, "5 is not below 6");
    });

    it("IsAtMost", function(){
      assert.isAtMost(4, 5);
    });

    it("isTrue", function(){
      assert.isTrue(true);
    });

    it("Is not true", function(){
      var tea = 'tasty chai';
      assert.isNotTrue(tea, 'great, time for tea!');
    });
});

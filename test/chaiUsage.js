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
        var isTrue = true;
        assert.isTrue(isTrue);
      });

      it("Is not true", function(){
        var tea = 'tasty chai';
        assert.isNotTrue(tea, 'great, time for tea!');
      });

      it("Is false", function(){
        var d = new Date();
        var toDayIsMonday = d.getDay() == 0;
        assert.isFalse(toDayIsMonday);
      });

      it("undefined is not false", function(){
        //assert.isFalse("");// fails 
        //assert.isFalse(undefined);// fails
        
      });

      it("Is not false", function(){
        var isAdmin =  true;
        assert.isNotFalse(isAdmin); 
      });

      it("Is NULL", function(){
        assert.isNull(null);
      });

      it("Is not NULL", function(){
        //assert.isNotNull(null, "Did't expect value to be null");
        assert.isNotNull("");
      });

      it("Is NaN", function(){
        assert.isNaN(NaN, 'NaN is NaN');
      });

      // only 
      it("Is boolean", function(){
        assert.isBoolean(true);
      });

      // typeOf
      it("typeOf", function(){
        assert.typeOf({key: "value"}, 'object');
        assert.typeOf(1, 'number');
        assert.typeOf([1,3,4,5], 'array');
        assert.typeOf('tea', 'string');
        assert.typeOf(/chai/, 'regexp');
        assert.typeOf(null, 'null', 'we have a null');
        assert.typeOf(undefined, 'undefined', 'we have an undefined');
      });

    

  });
  describe("Instance of", function(){
        var Tea = function(name){
          this.name = name;
        };
        var tea = new Tea("Iraani Chai");
        var coffee = new String('cappucino')
        it("Iraani chai is an instance of Tea", function(){
            assert.instanceOf(tea, Tea);
        });

        it("coffee is not an instance of Tea", function(){
            assert.notInstanceOf(coffee, Tea, "coffee is not Chai");
        });
  });

  describe("Include", function(){
    var arr = [1,3,4,5,6];
    it("[1,3,4,5,6] contains 3", function(){
      assert.include(arr, 3);
      // assert.include(arr, 8); fails gracefully
    });

    var obj1= {a: 10}, obj2= {b: 20};

    it("Array of object include another object", function(){
      assert.include([obj1, obj2], obj1);
    });
  });

  describe("#Emptiness", function(){
    it("check if empty", function(){
      assert.isEmpty("");
      assert.isEmpty([]);
      assert.isEmpty(new Map);
      assert.isEmpty({});
    });

    it("check if it is non-empty", function(){
      assert.isNotEmpty("is not empty");
    });
  });
var assert =  require('chai').assert;
var calc = require('../app/caclulator');

describe("Usage of chai", function(){
    it("Sum of two number is also a number",function(){
        let resSum = calc.sum(2,3);
        assert.typeOf(resSum, 'number', "Result of calculation should be a number");
    });
    
    it("Test an assertion to be truthy", function(){

    });
});

var assert =  require('chai').assert;
var calc = require('../app/caclulator');

describe("Calculator", function(done){
    describe("Arithmetic operations", function(){
        describe("Addition", function(){
            it("Add two positive numbers", function(done){
                let addResult = calc.sum(2, 3);
                assert.equal(addResult, 5);
                done();
            });

            it("Addition of two numbers is also a number", function(done){
                let addResult = calc.sum(2,3);
                assert.isNumber(addResult);
                done();
            });
            
        });
        describe("Subtraction",function(){
            it("Subtract one number from another", function(done){
                let addResult = calc.sum(2, -3);
                assert.equal(addResult, -1);
                done();
            });

            it("Subtraction of two number yields a number", function(done){
                let addResult = calc.sum(2,3);
                assert.isNumber(addResult);
                done();
            });
        });

        it("Subtract two numbers",function(done){
            let subResult = calc.sub(2,3);
            assert.equal(subResult, -1);
            done()
        });

        it("Subtract one -ve numbers", function(done){
            let subResult = calc.sub(2, -3);
            assert.equal(subResult, 5);
            done();
        });
       
    });

    describe("Miscellaneous operations", function(){
        it("Power of a number", function(done) {
            let powResult = calc.power(2,4);
            assert.equal(powResult, 16);
            done();
        });

        it("Factorial of a number", function(done){
            let factResult = calc.factorial(5);
            assert.equal(factResult, 120);
            done();
        });
    });
    
});
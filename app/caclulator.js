module.exports = {
    /* Arithmetic operations */
    sum: function(x, y){
        return x + y;
    },
    sub: function(x, y){
        return x -y;
    },
    mul: function(x, y){
        return x * y;
    },
    div: function(x, y){
        return x/y;
    },

    power: function(x, y){
        return Math.pow(x,y);
    },
    factorial: function(number){
        var fact = 1;
        for(let i= number; i > 0; --i){
            fact *= i ;
        }
        return fact;
    }
}
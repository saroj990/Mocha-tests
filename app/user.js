var request =  require('request');
var https =  require('https');

module.exports = {
    fetchDataFromServer: function(callback){
        let url = 'http://localhost:3000';
        var obj = {
            url: url,
            json: true
        };
        request.get(obj, function(err, response, body){
            if(err){
                callback(err, null);
            }
            else{
                var me = body.message
                callback(null, me);
            }
        });
    },
    pingUser: function(callback){
        let url = 'http://localhost:3000/users';
        var obj = {
            url: url,
            json: true
        };

        request.get(obj, function(err, res, body){
            if(err){
                callback(err, null);
            }
            else{
                callback(null, body.message);
            }
        });
    },
    saveUser: function(obj, callback){
        //let url = 'http://localhost:3000/users/add';

        request.post(obj, function(err, res , body){
            if(err){
                callback(err, null);
            }
            else{
                callback(null, body);
            }
        });
    }
}
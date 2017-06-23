 var chai = require('chai'),
 assert =  chai.assert;
 expect =  chai.expect;
 var userApi = require('../app/user');
 var ProgressBar = require('progress');
 
var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 300);

//  describe("Async calls", function(){
//     it("Gets data from the server", function(done){
//         userApi.fetchDataFromServer(function(err, message){
//             expect(message).to.be.equal("Welcome to express");
//             done();
//         });
//     });

//     it("Pings a user", function(done){
//         userApi.pingUser(function(err, result){
//             expect(result).to.be.a('string');
//             done()
//         });
//     });

//     it.only("Saves a user", function(done){
//         let url  = 'http://localhost:3000/users/add';
//         var obj = { url: url,
//                     form: { name:'saroj', address: 'bbsr'},
//                     json: true
//                 };
//         userApi.saveUser(obj, function(err, output){
//             console.log("outout= ", output)
//             expect(output).to.be.a('object');
//             expect(output).to.include({name: 'saroj', address:'bbsr'});
//             expect(output.name).to.be.a('string');
//             done();
//         });
//     });
//  });


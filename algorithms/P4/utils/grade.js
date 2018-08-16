var Mocha = require('mocha');
var mocha = new Mocha({});
var fs = require('fs');
var passing = 0;
var total = 0;

mocha.addFile('../test/test.js');

mocha.run()
    .on('test', function(test) {
      total += 1;
    })

    .on('pass', function(test) {
      passing += 1;
    })

    .on('end', function() {
      var message = `${passing}/${total} specs passed`;
      console.log(message);

      fs.writeFile('../score.txt', message, function (err) {
        if (err) throw err;
        console.log('score.txt saved');
      });
    });

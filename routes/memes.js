var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
  var id = req.params.id;
  var file = __dirname + '/../models/memes.json';
  fs.readFile(file, 'utf8', function (err, data) {
    if(err) {
      next(err);
    }else {
      var obj = JSON.parse(data);
      var memesArray = [];

      if(!id) {
        for(var i = 0; i < 5; i++) {
          memesArray[i] = obj[i];
        }
      }else {
        obj.forEach(function (elem) {
          if(elem.id == id) {
            memesArray = elem;
          }
        });
      }
      //res.json(memesArray);

    }
    console.log(memesArray);
    res.render('memes', {title: "Memes", array: memesArray});
  });


});

module.exports = router;

var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/:id/:msg', function(req, res, next) {
    //console.log(req);
    res.send('Woo!');

    var msg = req.params.msg;
    var file = __dirname + '/../models/messages.json';
    fs.writeFile(file, 'utf8', function (err, data) {

    });

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

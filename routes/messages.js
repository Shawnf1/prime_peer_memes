var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/:id/:msg', function(req, res, next) {
    var id = req.params.id;
    var msg = req.params.msg;
    var file = __dirname + '/../models/messages.json';

    fs.readFile(file, 'utf8', function (err, data) {
        if(err) {
            next(err);
        }else {
            if(data) {
                var obj = JSON.parse(data);
            }else {
                var obj = [];
            }
            obj.push({"id": id, "msg": msg});

            fs.writeFile(file, JSON.stringify(obj), function (err) {
               if(err) {
                   throw err;
               } else
               {
                   var finalMsgs = [];
                   obj.forEach(function(elem) {
                       if(elem.id == id) {
                           finalMsgs.push(elem);
                       }
                   });
                   res.send(finalMsgs);
               }
            });

        }

        });


});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
	console.log('received id', id);
    var file = __dirname + '/../models/messages.json';

    fs.readFile(file, 'utf8', function (err, data) {
       if(err) {
           next(err);
       } else {
		   var obj = JSON.parse(data);
		   var finalMsgs = [];
		   obj.forEach(function(elem) {
			   if(elem.id == id) {
				   finalMsgs.push(elem);
			   }
		   });
		   res.send(finalMsgs);
       }
    });
});

module.exports = router;

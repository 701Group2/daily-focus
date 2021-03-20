var express = require('express');
var router = express.Router();
var database = require('../firebase.js').database;
//

/* GET all todo list entries */
router.get('/', function(req, res, next) {
    // TODO implementation for getting entries

    res.send('get all todo entries'); // TODO change response after
});


/* POST new todo entry */
router.post('/', function(req, res, next) {
    // TODO implementation for adding new entry to database

    res.send('post new entry to database'); // TODO change response after
});


/* PUT entry update */
router.put('/', function(req, res, next) {
    // TODO implementation for updating entry in database

    res.send('put entry update into database'); // TODO change response after
});


/* DELETE todo list entry*/
router.delete('/userId/:userId/entryId/:entryId', function(req, res, next) {
    var originData, updatedArray = [];
    database.ref(req.params.userId + '/todolist/').get().then(function(snapshot) {
        if (snapshot.exists()) {
            originData = snapshot.val();
            // console.log(originData, 'orig');
            updatedArray = originData.filter(entry => entry.entry_id != req.params.entryId);
            // console.log(updatedArray, 'updated');
            database.ref(req.params.userId + '/todolist').set(updatedArray);

            res.send({'statusCode': 200, 'response': 'Deleted todo item successfully.'});
        }
        else {
          console.log("No data available");
        }
    }).catch(function(error) {
        console.error(error);
    });
});


module.exports = router;
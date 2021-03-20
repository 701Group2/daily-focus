const database = require("../firebase").database;
var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET all todo list entries */
router.get('/', function(req, res, next) {
    // TODO implementation for getting entries

    res.send('get all todo entries'); // TODO change response after
});


/* POST new todo entry */
router.post('/', async function(req, res, next) {
    // TODO implementation for adding new entry to database

    let userId = "test_user";
    let entryArray = [];
    let newEntry = req.body;

    // Retrieve array of entries for user from firebase DB
    await database
        .ref()
        .child(userId)
        .child("todolist")
        .get()
        .then((snapshot) => {
            // Only accept if array exists
            if (snapshot.exists()) {
                entryArray = snapshot.val();
            }
        })
        .catch((error) => {
            res.send(error);
            return;
        });

    // Set ticked : false for new entry
    newEntry.ticked = false;

    // Set uuid for new entry
    newEntry.entry_id = uuid.v4();
    
    // Add new todolist entry to array
    entryArray.push(newEntry);

    // Write this updated list back to the database
    await database.ref().child(userId).child("todolist").set(entryArray);

    res.status(200).send("Successful addition of entry");
});


/* PUT entry update */
router.put('/', function(req, res, next) {
    // TODO implementation for updating entry in database

    res.send('put entry update into database'); // TODO change response after
});


/* DELETE todo list entry*/
router.delete('/', function(req, res, next) {
    // TODO implementation deleting entry from our database

    res.send('delete todo list entry'); // TODO change response after
});


module.exports = router;
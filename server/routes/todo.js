const database = require("../firebase").database;
var express = require("express");
var router = express.Router();

/* GET all todo list entries */
router.get("/", function (req, res, next) {
    // TODO implementation for getting entries

    res.send("get all todo entries"); // TODO change response after
});

/* POST new todo entry */
router.post("/", function (req, res, next) {
    // TODO implementation for adding new entry to database

    res.send("post new entry to database"); // TODO change response after
});

/* PUT entry update */
router.put('/', async function(req, res, next) {
    // TODO Authenticate user then obtain user id

    let userId = "test_user";
    let entryArray = [];

    // Retrieve array of entries for user from firebase DB
    await database
        .ref()
        .child(userId)
        .child("todolist")
        .get()
        .then((snapshot) => {
            // Only accept if array exists and contains entries
            if (snapshot.exists() && snapshot.val().length != 0) {
                entryArray = snapshot.val();
            } else {
                res.status(400).send("No entries for user");
                return;
            }
        })
        .catch((error) => {
            res.send(error);
            return;
        });

    
    // Go through current array to find and update the entry that was changed
    entryArray.forEach((element) => {
        if (element.entry_id == req.body.entry_id) {
            for (var propt in req.body) {
                element[propt] = req.body[propt];
            }
        }
    });

    // Write this updated list back to the 
    await database.ref().child(userId).child("todolist").set(entryArray);

    res.status(200).send("Successful Update");
});

/* DELETE todo list entry*/
router.delete("/", function (req, res, next) {
    // TODO implementation deleting entry from our database

    res.send("delete todo list entry"); // TODO change response after
});

module.exports = router;

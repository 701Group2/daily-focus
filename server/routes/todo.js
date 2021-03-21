<<<<<<< HEAD
const { database } = require("../firebase");
const authorise = require("../auth");
=======
const database = require("../firebase").database;
>>>>>>> 9763e23... Added POST API handler
var express = require('express');
var router = express.Router();
var uuid = require('uuid');

<<<<<<< HEAD
// Helper method: Used to sort entryArray by GET API.
function sortByDateTime(a, b) {
    let dateA = new Date(a.date);
    let dateB = new Date(b.date);
    if (dateA - dateB === 0) {
        let timeA = a.time.split(":");
        let timeB = b.time.split(":");
        dateA.setHours(timeA[0]);
        dateA.setMinutes(timeA[1]);
        dateB.setHours(timeB[0]);
        dateB.setMinutes(timeB[1]);
    }
    return dateB - dateA;
}

/* GET all to do list entries */
router.get("/", async function (req, res, next) {
    let entryArray = [];
    const NZGmt = 13;
    let todaysDate = new Date();
    let userId = await authorise(req);

    if (userId === "") {
        return res.status(401).send("Unauthorised user.");
    }

    await database
        .ref()
        .child(userId)
        .child("todolist")
        .get()
        .then((snapshot) => {
            // when to-do list data is found
            if (snapshot.exists()) {
                entryArray = snapshot.val();
            }
        })
        .catch((error) => {
            res.send(error);
        });

    entryArray.sort((a, b) => {
        return sortByDateTime(a, b);
    });

    todaysDate.setHours(todaysDate.getHours() + NZGmt);
    todaysDate = todaysDate.toISOString().slice(0, 10);

    if (req.query.timeline === "today") {
        let todaysItems = entryArray.filter((item) => {
            return item.date === todaysDate;
        });

        res.send(todaysItems);
    } else if (req.query.timeline === "upcoming") {
        let toDoItemsStructured = {};
        let upcomingItems = entryArray.filter((item) => {
            return item.date > todaysDate;
        });

        // Stores upcoming to-do items by date.
        upcomingItems.forEach((toDoItem) => {
            if (toDoItem.date in toDoItemsStructured) {
                toDoItemsStructured[toDoItem.date].push(toDoItem);
            } else {
                toDoItemsStructured[toDoItem.date] = [];
                toDoItemsStructured[toDoItem.date].push(toDoItem);
            }
        });

        res.send(toDoItemsStructured);
    } else {
        res.send(entryArray);
    }
=======
/* GET all todo list entries */
router.get('/', function(req, res, next) {
    // TODO implementation for getting entries

    res.send('get all todo entries'); // TODO change response after
>>>>>>> 9763e23... Added POST API handler
});


/* POST new todo entry */
router.post('/', async function(req, res, next) {
<<<<<<< HEAD

    let entryArray = [];
    let newEntry = req.body;

    // Authorisation for user
    const userId = await authorise(req);

    if (userId === "") {
        res.status(401).send("Unauthorised user.");
    }
=======
    // TODO implementation for adding new entry to database

    let userId = "test_user";
    let entryArray = [];
    let newEntry = req.body;
>>>>>>> 9763e23... Added POST API handler

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
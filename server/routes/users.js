var express = require("express");
var usersRouter = express.Router();
const emptyLogin = require("./../validators");
const firebase = require("firebase");
const database = require("./../firebase").database;

/* GET users listing. */
usersRouter.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

//Added login functionality to obtain token to access user id for database items
function login(req, res) {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };
    //Validity check for login inputs
    const { valid, errors } = emptyLogin(user);
    if (!valid) return res.status(400).json(errors);
    //checks if matching email and password exist on firebase servers
    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return res.json({ token });
        })
        .catch((err) => {
            console.err(err);
            return res.status(403).json({ Message: "Either your email or password is incorrect" });
        });
}

function signup (req, res) {
    const newUser = {
        email: req.body.email,
		password: req.body.password,
    };

    const { valid, errors } = validateSignUpData(newUser);

	if (!valid) return res.status(400).json(errors);

    database.ref('/').once('value').then((snapshot) => {
        var existingEmail = (snapshot.val() && snapshot.val()[newUser.email]) 
        if (existingEmail != null ) {
            return res.status(400).json({ Message: 'this email address is already in use' }); 
        } else {
            return firebase
            .auth()
            .createUserWithEmailAndPassword(
                newUser.email, 
                newUser.password
            );
        }
    })
}

module.exports = {
    usersRouter,
    login,
    signup
};

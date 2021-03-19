const database = require("./firebase").database;
const authorise = require("./auth");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var { usersRouter, login } = require("./routes/users");
var todoRouter = require("./routes/todo");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todo", todoRouter);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

//endpoint for login
app.post("/login", authorise, login);

// Example of writing to database
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
    database.ref("/").set("new test", function (error) {
        if (error) {
            // The write failed...
            console.log("Failed with error: " + error);
        } else {
            // The write was successful...
            console.log("success");
        }
    });
});
module.exports = app;

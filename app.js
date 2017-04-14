var express = require('express'),
    PORT = process.env.PORT || 3000,
    IP  = process.env.IP,
    app = express();

    app.use(express.static("src"));
    app.set("view engine", "ejs");

    app.get("/", function(req,res) {
        res.render("home", {title: "home"});
    });

    app.get("/fizz-buzz", function(req,res) {
        res.render("fizz-buzz", {title: "fizz-buzz"});
    });

    app.get("/palindrome", function(req,res) {
        res.render("palindrome", {title: "palindrome"});
    });

    app.get("/pig-latinfy", function(req,res) {
        res.render("pig-latinfy", {title: "pig-latinfy"});
    });

    app.get("/string-reverser", function(req,res) {
        res.render("string-reverser", {title: "string-reverser"});
    });

    app.get("/vowel-counter", function(req,res) {
        res.render("vowel-counter", {title: "vowel-counter"});
    });

    app.get("/word-counter", function(req,res) {
        res.render("word-counter", {title: "word-counter"});
    });

    app.get("*", function(req,res) {
        res.render("wrong-page", {title: "wrong-page"});
    });

    app.listen(PORT, IP, function() {
        console.log('listening on port ' + PORT);
    });

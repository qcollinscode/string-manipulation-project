var express = require('express'),
    PORT = process.env.PORT || 3000,
    IP  = process.env.IP,
    app = express();

    app.use(express.static("src"));
    app.set("view engine", "ejs");

    app.get("/", function(req,res) {
        res.render("home");
    });

    app.listen(PORT, IP, function() {
        console.log('listening on port ' + PORT);
    });

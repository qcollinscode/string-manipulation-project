var express = require('express'),
    PORT = process.env.PORT || 3000,
    IP  = process.env.IP,
    app = express();

    app.set('views', __dirname + '/src/views');
    app.use(express.static(__dirname + "src"));
    app.set("view engine", "ejs");

    app.get("/", function(req,res) {
        res.render("home");
    });

    app.listen(PORT, IP, function() {
        console.log('listening on port ' + PORT);
    });

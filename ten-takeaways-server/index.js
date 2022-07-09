// Basic imports for running the server
const express = require("express");
const app = express();

// cors stuff
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// module functions
const { createPool, pgConnect, fetchRevs, readTenBooks } = require("./db/db");

// connecting to the postgress DB server
let pool = createPool();
pgConnect(pool);
let curr_index = 0;

// application specific
app.get("/startup", (req, res) => {
    curr_index = 0;
    readTenBooks(pool, curr_index).then((data, err) => {
        if (err) {
            console.log(err);
            return;
        }
        curr_index += Math.min(10, data.rows.length);
        console.log(data.rows);
        res.send(data.rows);
    });
});

app.get("/fetchTen", (req, res) => {
    readTenBooks(pool, curr_index).then((data, err) => {
        if (err) {
            console.log(err);
            return;
        }
        curr_index += Math.min(10, data.rows.length);
        console.log(data.rows);
        res.send(data.rows);
    });
});

// use this for getting a given books revs
app.post("/revs", (req, res) => {
    console.log(req.body);
    let isbn = req.body.isbn;
    fetchRevs(pool, isbn).then((data, err) => {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        res.send(data.rows);
    });
});

// Run the Server.
app.get("/", (req, res) => {
    res.send("Server Connected!");
});

// Connect to the Server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("running at port: " + port);
});

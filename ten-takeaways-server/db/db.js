// postgress library connection creating a pool
const { Pool } = require("pg");

function createPool() {
    const CONFIG = {
        // user information
        user: "esdrvlmramfrxw",
        // host information
        host: "ec2-18-215-8-186.compute-1.amazonaws.com",
        // database information
        database: "db7kcs7obacec3",
        // database password
        password:
            "c44b9cb1a972b06f9d82a7a6dd9435d13b5bb7fceb764fe31251c8373e6a8c02",
        // port information
        port: 5432,
        // ssl information
        ssl: {
            rejectUnauthorized: false,
        },
    };
    const pool = new Pool(CONFIG);
    return pool;
}

function pgConnect(pool) {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error("Error connecting to db client", err.stack);
        }
        client.query("SELECT NOW()", (err, result) => {
            release();
            if (err) {
                return console.error("Error executing query", err.stack);
            }
            console.log(result.rows);
        });
    });
}

// can also modify it to be handled like readQuery
function insertQuery(pool, query) {
    pool.query("SELECT NOW()", (err, result) => {
        if (err) {
            return console.error("Error executing query", err.stack);
        }
        console.log(result.rows);
    });
}

// function to read a query, seems simple enough
// when using, you must import it, and then handle it with
// .then((res, err) => { ... });
function readQuery(pool, query) {
    return pool.query("SELECT NOW()");
}

function readTenBooks(pool, index) {
    let query = `SELECT * FROM book_info ORDER BY id DESC OFFSET ${index} LIMIT 10;`;
    return pool.query(query);
}

function fetchRevs(pool, isbn) {
    let query = `SELECT * FROM reviews JOIN book_info ON book_info.isbn = reviews.isbn WHERE book_info.isbn = '${isbn}' LIMIT 10;`;
    return pool.query(query);
}

module.exports = {
    fetchRevs,
    readTenBooks,
    createPool,
    pgConnect,
    insertQuery,
    readQuery,
};

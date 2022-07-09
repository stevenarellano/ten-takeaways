## Libraries Used

1. express
2. cors
3. pg -> for postgress connection

## Pool vs. Client PG

-   Use a pool if you have or expect to have multiple concurrent requests. That is literally what it is there for: to provide a pool of re-usable open client instances (reduces latency whenever a client can be reused).

## SQL Stuff

-   delete all from a table maintains the schema
-   drop deletes the table completely
-   how to utilize OFFSET

## Why Cors and Body-Parser?


## hosting

- heroku how to
  - connect it with your github
  - in package.json, add the following script
    - "start": "node index.js",
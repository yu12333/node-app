const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send("Welcome to Abdulrahman's first Node app! Keep things Jiggy ;-) "));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const cassandra = require('cassandra-driver');
const fs = require('fs');
const auth = new cassandra.auth.PlainTextAuthProvider('ServiceUserName', 'ServicePassword');
const sslOptions1 = {
         ca: [
                    fs.readFileSync('path_to_file/sf-class2-root.crt', 'utf-8')],
                    host: 'cassandra.us-west-2.amazonaws.com',
                    rejectUnauthorized: true
        };
const client = new cassandra.Client({
                   contactPoints: ['cassandra.us-west-2.amazonaws.com'],
                   localDataCenter: 'us-west-2',
                   authProvider: auth,
                   sslOptions: sslOptions1,
                   protocolOptions: { port: 9142 }
        });
const query = 'SELECT * FROM hackathon_the_move_keyspace.test';

client.execute(query)
                    .then( result => console.log('Row from Keyspaces %s', result.rows[0]))
                    .catch( e=> console.log(`${e}`));

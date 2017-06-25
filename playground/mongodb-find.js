const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to mongo db server');
    }
    console.log('connected to MongoBB server');

    db.collection('Todos').find({}).toArray()
        .then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.error('Unable to fetch todos ', err);
        })
        // db.close();
});
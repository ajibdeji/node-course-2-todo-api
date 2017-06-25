const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to mongo db server');
    }
    console.log('connected to MongoBB server');
    // db.collection('Todos').insertOne({
    //     text: 'Something to Do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.error('unable to insert todo ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //insert to users

    db.collection('Users').insertOne({
        name: 'Damola',
        age: 26,
        location: 'Toronto'
    }, (err, result) => {
        if (err) {
            return console.error('Unable to insert to users');
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    });
    db.close();
});
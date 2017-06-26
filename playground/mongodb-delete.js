const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to mongo db server');
    }
    console.log('connected to MongoBB server');
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch' })
    //     .then((result) => {
    //         console.log(result);
    //     })

    // db.collection('Todos').findOneAndDelete({ completed: false })
    //     .then((result) => {
    //         console.log(result);
    //     })
    db.close();
});
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.error('Unable to connect to mongo db server');
    }
    console.log('connected to MongoBB server');
    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID("594fb839e452e507748082cf")
        }, {
            $set: {
                name: 'Adedamola'
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(result);
        });
    db.close();
});
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         required: true,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Edit this video '
// });

// newTodo.save()
//     .then((doc) => {
//         console.log('Saved Todo', doc);
//     }, (e) => {
//         console.error('unable ', e);
//     });

var User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    age: {
        type: Number,
        required: true
    }
});

var newUser = new User({
    name: 'Adedeji Ajiboye ',
    email: 'ajibdeji@gmail.com',
    age: 24
});

newUser.save()
    .then((userRecord) => {
        console.log(JSON.stringify(userRecord, undefined, 2));
    }, (e) => {
        console.error(e);
    });
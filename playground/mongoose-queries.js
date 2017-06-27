const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const { User } = require('./../server/models/user');

// var id = "595096d79fea3041e0cc597e";
var id = '5950ef9f5809fa20c4b12424';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if (!todos)
//         return console.error('Todo not found');
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo)
//         return console.error('Todo not found');
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo)
//         return console.error('Todo not found');
//     console.log('Todo', todo);
// });

User.findById(id).then((user) => {
    if (!user)
        return console.error('User not found');
    console.log('User', user);
}).catch((e) => console.log(e));
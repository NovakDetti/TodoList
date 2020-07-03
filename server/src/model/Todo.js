const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: "New"
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        letterhead: {
            type: String,
            default: ""
        },
        importance: {
            type: Number,
            default: 0,
        },
        category: {
            type: String,
            required : true,
            ref: 'Category'
        }
    }
);


const Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;
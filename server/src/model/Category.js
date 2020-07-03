const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
        },
        name : {
            type: String,
            required : true
        }
    }
);

categorySchema.virtual('todos', {
    ref: 'Todo',
    localField: 'name',
    foreignField: 'category'
});


const Category = mongoose.model('Category', categorySchema);


module.exports = Category;
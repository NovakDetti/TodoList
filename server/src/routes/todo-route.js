const router = require('express').Router();
const Todo = require('../model/Todo');

// CREATE
router.post("/todo/create", async (req, res) => {
    try {
        const isExist = await Todo.find({ description: req.body.description }); 
        if(isExist.length === 0){
            const todo = new Todo(req.body);
            await todo.save();
            res.status(201).send({ todo });
        }else{
            res.status(500).send("Already exist"); 
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

// READ
router.post("/todo/all", async (req, res) => {
    try {
        const todos = await Todo.find({ category : req.body.category})
        await res.send(todos);
    } catch (error) {
        res.status(500).send(error);
    }
})

// READ BY TODAY
router.post("/todo/today", async (req, res) => {
    try {
        const todos = await Todo.find({ category : req.body.category})
        let todayTodos = todos.filter( todo => new Date(todo.createdAt).toLocaleDateString() === new Date().toLocaleDateString())
        await res.send(todayTodos);
    } catch (error) {
        res.status(500).send(error);
    }
})

// READ BY WEEK
router.post("/todo/month", async (req, res) => {
    try {
        const todos = await Todo.find({ category: req.body.category })
        let todayTodos = todos.filter(todo => new Date(todo.createdAt).toLocaleDateString().substring(0, 9) === new Date().toLocaleDateString().substring(0, 9))
        await res.send(todayTodos);
    } catch (error) {
        res.status(500).send(error);
    }
})

// DELETE

router.delete("/todo/delete", async (req, res) => {
    try {
        await Todo.deleteOne({ description : req.body.description })
        res.status(200).send("Deleted");
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router
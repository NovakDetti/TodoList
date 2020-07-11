const router = require('express').Router();
const Category = require('../model/Category');
const User = require('../model/User');
const auth = require('../middleware/auth');

// CREATE
router.post("/category/create", auth, async (req, res) => {  
    try {
        const isExist = await Category.find({ name: req.body.name });
        if (isExist.length === 0) {
            const category = new Category(req.body);
            await category.save();
            res.status(201).send({ category });
        }else{
            res.status(201).send("Already exist");
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

// READ
router.post("/category/all", auth, async (req, res) => {
    try {
        await req.user
            .populate({
                path: 'categories'
            })
            .execPopulate();
        res.status(200).send(req.user.categories);
    } catch (error) {
        res.status(500).send(error);
    }
})

// DELETE
router.delete("/category/delete", async (req, res) => {
    try {
        await Category.deleteOne({ name: req.body.name })
        res.status(200).send("Deleted");
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports = router
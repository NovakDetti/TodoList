const express = require('express');
const router = new express.Router();
const User = require('../model/User');


router.post('/users/signup', async (req, res) => {
    try {
        const user = new User(req.body.user);
        const token = await user.generateToken();
        await user.save();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.user.email,
            req.body.user.password
        );
        const token = await user.generateToken();
        res.send({ user, token });
    } catch (error) {
        res.status(404).send();
    }
});

router.post('/users/logout', async (req, res) => {
    try {
        const user = await User.find({ email : req.body.email})
        user[0].tokens.filter(token => token.token != req.body.token);
        await user[0].save();
        res.status(200).send("logged out");
    } catch (error) {
        res.status(500).send();
    }
});

router.get('/users/me', async (req, res) => {
    res.send(req.user);
});


router.delete('/users/me', async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (error) {
        res.status(500).send();
    }
});

module.exports = router;
const express = require("express");

const app = express();

app.use(express.json());

app.post(`/users`, (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send({ message: "Username and Password is required." });
    }
    res.send({ id: "1"});
});

module.exports = {
    app
};
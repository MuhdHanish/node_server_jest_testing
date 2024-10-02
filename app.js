const express = require("express");


function createApp(db) {
    const app = express();
    app.use(express.json());

    app.post(`/users`, (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ message: "Username and Password are required." });
        }
        const userExists = db.findUserByUsername(username);
        if (userExists) {
            return res.status(409).send({ message: "Username already taken." });  
        }
        const newUser = db.addUser({ username, password });
        res.status(201).send({ id: newUser.id });
    });

    return app;
}

module.exports = {
    createApp
};

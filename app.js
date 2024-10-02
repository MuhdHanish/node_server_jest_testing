const express = require("express");

const app = express();


app.post(`/users`, (req, res) => {
    res.send({ id: "1"});
});

module.exports = {
    app
};
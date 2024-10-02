import express from "express";

const app = express();

app.get(`/test`, (req, res) => {
    res.sendStatus(200);
});

export { app };
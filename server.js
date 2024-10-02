import express from "express";

const app = express();

app.get(`/test`, (req, res) => { });

app.listen(3000, () => console.log(`Server listening or port 3000`));
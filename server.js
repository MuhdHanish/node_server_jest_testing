const db = require("./db");
const { createApp } = require("./app");

const app = createApp(db);

app.listen(3000, () => {
    console.log(`Server listening or port 3000`);
});

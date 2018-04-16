const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "assets")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "assets/index.html"));
});

app.get("/with-preload", (req, res) => {
    res.sendFile(path.resolve(__dirname, "assets/with-preload.html"));
});

app.listen(3000, () => {
    console.log("Server listening on 3000");
});
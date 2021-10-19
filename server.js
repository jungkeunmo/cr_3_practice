const express = require("express");
const morgan = require("morgan");
const path = require("path");
const imgRouter = require("./router/imgRouter"); 

const PORT = 3000;
const server = express();

server.set("view engine", "pug");
server.use(morgan("dev"));
server.use(express.static(path.join(__dirname, "/assets")));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", imgRouter);

server.listen(PORT, () => {
    console.log(`🌈http://localhost${PORT}, IMG REVIEWS SERVER START🐾`);
});
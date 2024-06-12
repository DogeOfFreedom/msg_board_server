/* eslint-disable import/newline-after-import */
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())

const cors = require("cors");
app.use(cors({origin: "http://localhost:5173"}));


const port = 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port ${port}`);
})

const router = require("./router");
app.use(router);
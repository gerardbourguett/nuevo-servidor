const express = require('express');
const cors = require('cors');
const app = express();

const {} = require("./constants/index.js")



const appStart = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}.`);
        });
    } catch (error) {
        console.log(error);
    }
}

appStart()
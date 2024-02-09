require('dotenv').config({ path: "./src/.env" });
const express = require('express');
const { router } = require('./router/router');


const app = express();

app.use(express.json());
app.use(router)

const PORT = process.env.PORT
app.listen(PORT, console.log(`Server is running on PORT ${PORT}.`));
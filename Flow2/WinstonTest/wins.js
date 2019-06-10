const appLogger = require("./setup.js");
const express = require('express');
const app = express();
const port = 3000

app.use((req, res, next) => {
    appLogger.log("info", "Before middlewares");
    appLogger.log("debug","debugger msg");
	next();
});


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

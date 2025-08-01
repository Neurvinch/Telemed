const express = require('express');

const cors = require('cors');

const cookieParser = require('cookie-parser');

const globalErrorHandler = require('./controller/errorController')

const AppError = require('./appError')

const app = express();

app.all("/{*any}", (req , res , next) => {
    next(new AppError(`can't find ${req.originalUrl} on this server`, 400))
})


app.use(globalErrorHandler);


app.use(cors({
    origin: ["http://localhost:5173",
],
    credentials: true
}));

app.use(express.json({limit: '10mb'}));


app.use(cookieParser());

module.exports = app;
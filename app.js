// const express = require('express');
// const logger = require('morgan');
// const app = express();
// const sweetsRouter = require('./routes/sweets');
// const workerRouter = require('./routes/workers');

// app.use(express.json(), logger('dev'));

// app.use('/api/v1/sweets', sweetsRouter)
// app.use('/api/v1/workers', workerRouter)

// module.exports = app;

const dotenv = require("dotenv");
// переносит ключ и значение из .env в внутренее окружение (process.env)
dotenv.config();
const { DB_HOST } = process.env;
const mongoose = require("mongoose");
mongoose
  .connect(DB_HOST)
  .then(() => console.log(`Database connected`))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
    //закрыть все неиспользованные процессы
  });

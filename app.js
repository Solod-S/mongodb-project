const express = require("express");
const app = express();
const productRouter = require("./routes/api/contact");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// переносит ключ и значение из .env в внутренее окружение (process.env)

app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);

const { DB_HOST, PORT = 3000 } = process.env;
const mongoose = require("mongoose");
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log(`Database connected`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
    //закрыть все неиспользованные процессы
  });

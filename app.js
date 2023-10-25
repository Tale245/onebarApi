const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const cardRouter = require('./routes/foodCard');
const BarCardRouter = require('./routes/foodCardBar');
const orderRouter = require('./routes/order');
const userCardRouter = require('./routes/userCard');
const { errors } = require('celebrate');
const cors = require('cors');
const auth = require('./middlewares/auth');
const { INTERNAL__SERVER_ERROR } = require('./constants/constants');

const app = express();
mongoose.connect('mongodb://127.0.0.1/oneBarServer');

const options = {
  origin: ['http://localhost:3000', 'http://192.168.0.104:3000',  'http://192.168.0.113:3000'],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

app.use('*', cors(options));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', loginRouter);

app.use(auth);
app.use('/', userRouter);
app.use('/', cardRouter);
app.use('/', BarCardRouter);
app.use('/', userCardRouter);
app.use('/', orderRouter);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = INTERNAL__SERVER_ERROR, message } = err;
  console.log(err);
  res.status(statusCode).send({
    // проверяем статус и выставляем сообщение в зависимости от него
    message:
      statusCode === INTERNAL__SERVER_ERROR
        ? 'На сервере произошла ошибка'
        : message,
  });
  next();
});

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`);
});

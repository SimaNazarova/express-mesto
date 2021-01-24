const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const app = express();

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// eslint-disable-next-line no-console
mongoose.connection.on('open', () => console.log('DB is connected'));

const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: '60099ce5a7dc074534a80bcb',
  };

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});

const express = require('express');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(__dirname + '/public'));

app.use('/', cardsRouter);
app.use('/', usersRouter);

app.use((req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
const path = require('path');
const readJson = require('../utils/readJsonFromFile');

const getUsers = (req, res) => {
  const fileName = path.join(__dirname, '../data/users.json');
  readJson(fileName)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  const fileName = path.join(__dirname, '../data/users.json');
  readJson(fileName)
    .then((users) => {
      const user = users.find((person) => person._id === id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getUsers,
  getUser,
};

const router = require('express').Router();

const controller = require('../controllers/users');

router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUser);

module.exports = router;

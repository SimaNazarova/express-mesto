const router = require('express').Router();

const controller = require('../controllers/users');

router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUser);
router.post('/users', controller.createUser);
router.patch('/users/me', controller.updateUser);
router.patch('/users/me/avatar', controller.updateAvatar);

module.exports = router;

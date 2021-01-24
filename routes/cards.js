const router = require('express').Router();

const controller = require('../controllers/cards');

router.get('/cards', controller.getCards);
router.post('/cards', controller.postCards);
router.delete('/cards/:id', controller.deleteCards);
router.put('/cards/:id/likes', controller.likeCard);
router.delete('/cards/:id/likes', controller.dislikeCard);

module.exports = router;

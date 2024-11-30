const Router = require('express');

const router = new Router();
const gameController = require('../controllers/game.controller')

router.post('/game', gameController.createGame);
router.get('/game', gameController.getGames);
router.get('/game/:id', gameController.getGameById);
router.put('/game', gameController.updateGame);
router.delete('/game/:id', gameController.deleteGame);

module.exports = router;
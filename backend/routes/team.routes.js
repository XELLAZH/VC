const Router = require('express');

const router = new Router();
const teamController = require('../controllers/team.controller')

router.post('/team', teamController.createTeam);
router.get('/team', teamController.getTeams);
router.get('/team/:id', teamController.getTeamById);
router.put('/team', teamController.updateTeam);
router.delete('/team/:id', teamController.deleteTeam);

module.exports = router;
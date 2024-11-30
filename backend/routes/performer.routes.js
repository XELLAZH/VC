const Router = require('express');

const router = new Router();
const performerController = require('../controllers/performer.controller')

router.post('/performer', performerController.createPerformer);
router.get('/performer', performerController.getPerformers);
router.get('/performer/:id', performerController.getPerformerById);
router.put('/performer', performerController.updatePerformer);
router.delete('/performer/:id', performerController.deletePerformer);

module.exports = router;
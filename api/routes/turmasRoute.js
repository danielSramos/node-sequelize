const {Router} = require('express');
const TurmaController = require('../controllers/TurmaController.js');

const router = Router();

router.get('/turmas', TurmaController.findAllTurmas);
router.get('/turmas/:id', TurmaController.findTurmaById);
router.post('/turmas', TurmaController.createTurma);
router.put('/turmas/:id', TurmaController.updateTurma);
router.delete('/turmas/:id', TurmaController.destroyTurma);

module.exports = router;
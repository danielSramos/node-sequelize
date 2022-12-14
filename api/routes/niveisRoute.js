const { Router } = require('express');
const NivelController = require('../controllers/NivelController.js');

const router = Router();

router.get('/niveis', NivelController.findAllNiveis);
router.get('/niveis/:id', NivelController.findNivelById);
router.post('/niveis', NivelController.createNivel);
router.put('/niveis/:id', NivelController.updateNivel);
router.delete('/niveis/:id', NivelController.destroyNivel);
router.post('/niveis:id/restaura', NivelController.restoreNivel);

module.exports = router;
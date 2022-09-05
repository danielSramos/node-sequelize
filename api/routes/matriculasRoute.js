const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();

router.get('/matriculas', MatriculaController.findAllMatriculas);
router.get('/matriculas/:id', MatriculaController.findMatriculaById);
router.post('/matriculas', MatriculaController.createMatricula);
router.put('/matriculas/:id', MatriculaController.updateMatricula);
router.delete('/matriculas/:id', MatriculaController.destroyMatricula);

module.exports = router;
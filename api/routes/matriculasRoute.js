const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();

router.get('/matriculas', MatriculaController.findAllMatriculas);
router.get('/matriculas/:id', MatriculaController.findMatriculaById);
router.post('/matriculas', MatriculaController.createMatricula);

module.exports = router;
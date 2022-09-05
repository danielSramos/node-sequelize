const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js')

const router = Router();

//Pessoas
router.get('/pessoas', PessoaController.findAllPeople);
router.get('/pessoas/:id', PessoaController.findPeopleById);
router.post('/pessoas', PessoaController.createPeople);
router.put('/pessoas/:id', PessoaController.updatePeople);
router.delete('/pessoas/:id', PessoaController.destroyPeople);

//Matriculas
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findMatriculaById);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.destroyMatricula);

module.exports = router;
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js')

const router = Router();

//Pessoas
router.get('/pessoas', PessoaController.findAllPeople);
router.get('/pessoas/ativos', PessoaController.findActivePeople);
router.get('/pessoas/:id', PessoaController.findPeopleById);
router.get('/pessoas/:estudanteId/matricula', PessoaController.getConfirmedMatriculas);
router.post('/pessoas', PessoaController.createPeople);
router.post('/pessoas/:id/restaura', PessoaController.restorePeople);
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelPeople);
router.put('/pessoas/:id', PessoaController.updatePeople);
router.delete('/pessoas/:id', PessoaController.destroyPeople);

//Matriculas
router.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.findMatriculaById);
router.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.getMatriculasByTurmas);
router.get('/pessoas/matricula/lotada', MatriculaController.getTurmasFull);
router.post('/pessoas/:estudanteId/matricula', MatriculaController.createMatricula);
router.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restoreMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.updateMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.destroyMatricula);

module.exports = router;
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js')

const router = Router();

//Pessoas
router.get('/pessoas', PessoaController.findActivePeople);
router.get('/pessoas/todos', PessoaController.findAllPeople);
router.get('/pessoas/:id', PessoaController.findPeopleById);
router.get('/pessoas/:estudanteId/matricula', PessoaController.getMatriculas);
router.post('/pessoas', PessoaController.createPeople);
router.post('/pessoas/:id/restaura', PessoaController.restorePeople);
router.put('/pessoas/:id', PessoaController.updatePeople);
router.delete('/pessoas/:id', PessoaController.destroyPeople);

//Matriculas
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findMatriculaById);
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.getMatriculasByTurmas);
router.get('/pessoas/matricula/lotada', PessoaController.getTurmasFull);
router.post('/pessoas/:estudanteId/matricula', PessoaController.createMatricula);
router.post('/pessoas/:estudanteId/matricula/:matriulaId/restaura', PessoaController.restoreMatricula);
router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelPeople);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.destroyMatricula);

module.exports = router;
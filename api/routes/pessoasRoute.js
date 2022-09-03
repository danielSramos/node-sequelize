const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js')

const router = Router();

router.get('/pessoas', PessoaController.findAllPeople);
router.get('/pessoas/:id', PessoaController.findPeopleById);
router.post('/pessoas', PessoaController.createPeople);
router.put('/pessoas/:id', PessoaController.updatePeople);
router.delete('/pessoas/:id', PessoaController.destroyPeople);

module.exports = router;
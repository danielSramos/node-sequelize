const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');

module.exports = app => {
    const serverPath = 'localhost:3000/';
    app.use(bodyParser.json());
    app.use(pessoas);
    app.use(niveis);
    app.use(turmas);

    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Rotas de recursos da API:',
            pessoas: 'localhost:3000/pessoas/',
            niveis: 'localhost:3000/niveis/',
            turmas: 'localhost:3000/turmas/',
            matriculas: 'localhost:3000/matriculas/'
        });
    });
}

var express = require('express');
var router = express.Router();
var disciplinaS = require('../services/DisciplinaS');

//metodo da tota que lista
router.get('/list', function (req, res, next) {
    return res.json(disciplinaS.list());
});
//metodo da tota que cria
router.post('/register', function (req, res, next) {
    const disciplina = disciplinaS.register(req.body);
    return res.json(disciplina);
});
//metodo da tota que edita
router.put('/update/:id', function (req, res, next) {
    const disciplina = disciplinaS.update(req.params.id, req.body);
    return res.json(disciplina);
});
//metodo da tota que exclui
router.delete('/delete/:id', function (req, res, next) {
    const ok = disciplinaS.delete(req.params.id);
    if (ok) return res.json({ "sucess": true });
    else return res.json({ "sucess": false });
});
//metodo da tota que lpesquisa
router.get('/retrieve/:id', function (req, res, next) {
    const disciplina = disciplinaS.retrieve(req.params.id);
    return res.json(disciplina);
});

module.exports = router
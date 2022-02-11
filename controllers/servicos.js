const Servico = require('../models/servicos')

module.exports = app => {

    app.post('/servicos', (req, res) => {
        const servico = req.body
        Servico.adiciona(servico)
            .then(resultado => res.json(resultado))
            .catch(erro => res.status(400).json(erro))
    })

    app.get('/servicos', (req, res) => {
        Servico.lista()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })
}
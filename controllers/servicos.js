const Servico = require('../models/servicos')

module.exports = app => {

    app.post('/servicos', (req, res) => {
        const servico = req.body
        Servico.adiciona(servico, res)
    })
}
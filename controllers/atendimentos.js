const Atendimento = require('../models/atendimentos')


module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', async (req, res) => {
        const atendimento = req.body

        var idserv = null

        // this function waits for the query that seeks for the id giving the name
        await Servico.buscaIdPorNome(req.body.idserv, res).then((resultado) => {
            idserv = resultado[0].id
        })

        // after getting the id, the field passed to the add query is changed
        atendimento.idserv = idserv
        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.deleta(id, res)
    })

}
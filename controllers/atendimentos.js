const Atendimento = require('../models/atendimentos')
const Servico = require('../models/servicos')


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

        await Servico.buscaIdPorNome(req.body.servico, res).then((resultado) => {
            idserv = resultado[0].id
        })
        console.log(atendimento)
        Atendimento.adiciona({...atendimento, idserv}, res)
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

    app.post('/servicos', (req, res) => {
        const servico = req.body
        Servico.adiciona(servico, res)
    })
}
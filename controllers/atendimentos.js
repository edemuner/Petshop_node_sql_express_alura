const Atendimento = require('../models/atendimentos')


module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista()
            .then(resultados => res.json(resultados))
            .catch(erro => res.status(400).json(erro))
    })

    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id)
        .then(resultado => {
            console.log(resultado)
            res.json(resultado)
        })
        .catch(erro => {
            res.status(400).json(erro)
        })
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
        Atendimento.adiciona(atendimento)
        .then(atendimentoCadastrado => {
            res.status(201).json(atendimentoCadastrado)
        })
        .catch(erros => {
            res.status(400).json(erros)
        })
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores)
            .then(resultado => res.json(resultado))
            .catch(erro => res.status(400).json(erro))
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.deleta(id, res)
    })

}
const Atendimento = require('../models/atendimentos')
const Servico = require('../models/servicos')
const Pets = require('../models/pets')


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
            res.json(resultado)
        })
        .catch(erro => {
            res.status(400).json(erro)
        })
    })

    app.post('/atendimentos', async (req, res) => {

        const atendimento = req.body
        console.log(atendimento)

        Pets.buscaIdPorNome(atendimento.idpet)
        .then(resultado => {
            atendimento.idpet = resultado[0].id
        
            Servico.buscaIdPorNome(atendimento.idserv)
            .then((resultado) => {
                atendimento.idserv = resultado[0].id

                Atendimento.adiciona(atendimento)
                .then(atendimentoCadastrado => {
                    res.json(atendimentoCadastrado)
                })
                .catch(erros => {
                    res.status(400).json(erros)
                })
            })
        })
        .catch(erro => res.status(400).json(erro))
        
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
        Atendimento.deleta(id)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })

}
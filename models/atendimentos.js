const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {

    adiciona(atendimento, res){
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')

        const data = moment(atendimento.data, 'DD-MM-YYYY hh:mm:ss').format('YYYY-MM-DD HH:mm:ss')

        // data válida somente se no futuro
        const dataValida = moment(data).isSameOrAfter(dataCriacao)

        const clienteValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido:dataValida,
                mensagem: 'Data dve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        // filtro do objeto acima para encontrar campos inválidos
        const erros =  validacoes.filter(campo => !campo.valido)

        const existemErros = erros.length

        // se esse filtro tiver qualquer comprimento, a query não é executada e o erro é exibido
        if (existemErros){
            res.status(400).json(erros)
        }
        else {

        const atendimentoDatado = {...atendimento, dataCriacao, data}

        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            }
            else {
                res.status(201).json(resultados)
            }
        })
        }
        
        
    }
    
    lista(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]

            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res){

        if (valores.data){
            valores.data = moment(valores.data, 'DD-MM-YYYY hh:mm:ss').format('YYYY-MM-DD HH:mm:ss')
        }

        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }

        })
    }

}

module.exports = new Atendimento
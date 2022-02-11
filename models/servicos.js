const conexao = require('../infraestrutura/database/conexao')
const repositorio = require('../repositorios/servicos')

class Servico {


    adiciona(servico){

        return repositorio.adiciona(servico)
            .then(resultado => {
                return resultado
            })
    }

    buscaIdPorNome(nome){
        
        return repositorio.buscaIdPorNome(nome)
    }

    lista(){
        
        return repositorio.lista()
    }
}

module.exports = new Servico
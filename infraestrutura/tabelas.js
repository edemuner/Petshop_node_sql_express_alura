class Tabelas {

    init(conexao){
        this.conexao = conexao
        console.log('Tabelas foram chamadas')
        this.criarAtendimentos()
        this.criarServicos()
        this.criarPets()
    }

    criarAtendimentos(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (' + 
        'id int NOT NULL AUTO_INCREMENT,' + 
        'cliente varchar(50) NOT NULL,' + 
        'pet varchar(20),' + 
        'servico varchar(20) NOT NULL,' + 
        'data datetime NOT NULL,' + 
        'dataCriacao datetime NOT NULL,' + 
        'status varchar(20) NOT NULL,' + 
        'observacoes text,' + 
        'PRIMARY KEY(id),' + 
        'idserv int NOT NULL,' + 
        'FOREIGN KEY(idserv) REFERENCES Servicos(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) console.log(erro)
            else {
                console.log('Tabela de atendimentos criada com sucesso')
            }
        })
    }

    criarServicos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Servicos (' + 
        'id int NOT NULL AUTO_INCREMENT,' + 
        'nome varchar(15) NOT NULL,' + 
        'preco float NOT NULL,' + 
        'PRIMARY KEY (id))'
    
        this.conexao.query(sql, (erro) => {
            if (erro) console.log(erro)
            else {
                console.log('Criada tabela de serviços')
            }
        })
    }

    criarPets(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pets (' +
                    'id int NOT NULL AUTO_INCREMENT,' +
                    'nome varchar(20),' +
                    'imagem varchar(200),' +
                    'PRIMARY KEY (id))'
        this.conexao.query(sql, erro => {
            if (erro) console.log(erro)
            else console.log('Tabela pet criada com sucesso')
        })
    }
}

module.exports = new Tabelas
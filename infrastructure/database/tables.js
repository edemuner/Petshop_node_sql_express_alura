class Tabelas {

    init(conexao){
        this.conexao = conexao
        console.log('Tables called')
        this.criarAtendimentos()
        this.criarServicos()
        this.criarPets()
    }

    criarAtendimentos(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (' + 
        'id int NOT NULL AUTO_INCREMENT,' + 
        'cliente varchar(11) NOT NULL,' + 
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
                console.log('Created appointment table')
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
                console.log('Created services table')
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
            else console.log('Created pets table')
        })
    }
}

module.exports = new Tabelas
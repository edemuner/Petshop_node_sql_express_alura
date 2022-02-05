module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentose está realizando um get'))
}